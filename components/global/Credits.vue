<template>
    <div class="credits-container">
        <div v-if="authors.length == 1" class="credist-long-card">
            <NuxtImg class="credits-long-card-propic" :src="`https://github.com/${authors[0].github_nickname}.png`"
                alt="Author Profile Picture" />
            <div claSS="credits-long-card-content">
                <span class="credits-long-card-name">{{ authors[0].name }}</span>
                <div class="flex">
                    <NuxtImg class="credits-long-card-gh-logo" src="/github-mark.svg" />
                    <a :href="`https://github.com/${authors[0].github_nickname}`" class="credits-long-card-nickname">{{
                        authors[0].github_nickname }}</a>
                </div>
            </div>
        </div>
        <div v-else class="credits-short-card">
            <div v-for="(author, i) in authors" :key="i" class="credits-short-card">
                <img :src="author.propic" alt="Author Profile Picture" />
                <h3>{{ author.name }}</h3>
                <p>{{ author.github_nickname }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Credits',
    props: {
        authors: {
            type: Array,
            Required: true,
            /* author object should be like:
                {
                    name: 'Author Name',
                    github_nickname: '...',
                }
            */
        },
        date: {
            type: String,
            Required: true
        }
    },
}
</script>

<style>
.credits-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--yellow-card);

    margin-bottom: 2em;

    color: #000;
}

.credist-long-card {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 1rem;
    background-color: var(--yellow-card);
    border-radius: var(--radius-round);
}

.credits-long-card-content {
    display: flex;
    width: auto;
    flex-direction: column;
    justify-content: left;
    padding: 1rem;
}

.credits-long-card-name {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 600;
    width: auto;
}

.credits-long-card-gh-logo {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
}

.credist-long-card-nickname {
    font-size: 1rem;
    font-weight: normal;
    width: auto;
}

.credits-long-card-propic {
    width: auto;
    height: auto;
    max-width: 100px;
    max-height: 100px;
    border-radius: var(--radius-round);
    object-fit: cover;
}
</style>