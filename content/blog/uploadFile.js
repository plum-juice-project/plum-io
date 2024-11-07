const lint = require('../linter.js');

const vscode = require('vscode');
const path = require('path');
const { log_error, log_info, log_warn } = require('../logger.js');

const { DEFAULT_SCOPE, REPO_BRANCH, REPO_NAME, ORG_NAME, ARTICLE_PATH} = require('../common.js');

async function CMDuploadFile() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active editor found');
        return;
    }

    const auth = await vscode.authentication.getSession('github', DEFAULT_SCOPE, { createIfNone: true })
    if (!auth) {
        vscode.window.showErrorMessage('Authentication failed');
        return;
    }

    const token = auth.accessToken;

    // retrieve the document text
    const document = editor.document;
    let content = document.getText();

    if (lint.checkMissingField(content).length > 0) {
        log_error('Missing metadata fields, check the diagnostics panel for more information');
        vscode.window.showErrorMessage('Missing metadata fields');
        return;
    }

    // if the document not have error or warning diagnostics, prepare the file to be pushed
    content = addCreditsToAricle(document, auth.account.label);
    const content64 = btoa(document.getText());

    // set filename, if draft add _ to the filename, will be ignored by the website
    let fileName = path.basename(document.fileName);
    if (checkDraft(document)) {
        fileName = `_${fileName}`;
    }

    const url = `https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}/contents/${ARTICLE_PATH}/${fileName}`;

    const body = {
        message: `Added ${fileName} by ${auth.account.label}`,
        content: content64
    }

    await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            vscode.window.showInformationMessage(`File ${fileName} pushed to ${REPO_NAME} on branch ${REPO_BRANCH}`);
        } else {
            log_error(`Failed to push file ${fileName} to ${REPO_NAME} on branch ${REPO_BRANCH} with error: ${response.statusText}`);
            vscode.window.showErrorMessage(`Failed to push file see console for more details`);
        }
    }
    ).catch(error => {
        log_error(`Failed during fecth with error: ${error}`);
        vscode.window.showErrorMessage(`Failed during connection see console for more details`);
    });
}

/*
    * Check if the markdown document has error or warning diagnostics
    * The function returns true if the document has error or warning diagnostics, otherwise it returns false
    * @param {vscode.TextDocument} document
    * @returns {boolean}
*/
function checkDiagnostic(document) {
    const editor = vscode.window.activeTextEditor;
    const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);

    const metadataWarnings = diagnostics.filter(diagnostic =>
        diagnostic.severity === vscode.DiagnosticSeverity.Warning ||
        diagnostic.severity === vscode.DiagnosticSeverity.Error
    );

    return metadataWarnings.length > 0;
}

/*
    * Add credits to the document
    * Since Nuxt.js supports Vue components in markdown, we can use a custom component to add credits to the article.
    * The component is added at the end file, following the markdown syntax for Vue components.
    * The function returns the document text with the credits added.
    * @param {vscode.TextDocument} document
    * @param {string} gh_nickname
    * @returns {string}
*/
function addCreditsToAricle(document, gh_nickname) {

    let text = document.getText();

    let author = getAuthorFromMeta(document);
    if (!author) {
        log_warn('Author not found in metadata');
        author = gh_nickname;
    }
    const date = new Date().toLocaleDateString("it-IT");
    const credits = `::credits{name=\"${author}\" nickname=\"${gh_nickname}\" date=\"${date}\"}::`; // TODO improve this card on website

    return text + '\n\n' + credits + '\n';
}

/*
    * Get the author from the metadata
    * The function returns the author name if found in the metadata, otherwise it returns undefined
    * @param {vscode.TextDocument} document
*/
function getAuthorFromMeta(document) {
    const meta = document.getText().split('---')[1];
    if (!meta.split('\n').some(field => field.startsWith('author'))) {
        return;
    }
    const author = meta.split('\n').filter(field => field.startsWith('author'))[0].split(': ')[1];
    return author;
}

/*
    * Check if the document is a draft
    * The function returns the draft status if found in the metadata, otherwise it returns false
    * @param {vscode.TextDocument} document
*/
function checkDraft(document) {
    const meta = document.getText().split('---')[1];
    if (!meta.split('\n').some(field => field.startsWith('draft'))) {
        return false;
    }

    const draft = meta.split('\n').filter(field => field.startsWith('draft'))[0].split(': ')[1];
    return draft;
}

module.exports = {
    CMDuploadFile
}