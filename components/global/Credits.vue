<template>
    <div class="credits-container">
        <div v-for="(author, i) in authors" :key="i" class="credits-card">
            <NuxtLink :to="`https://github.com/${author.github_nickname}`" target="_blank" rel="noopener noreferrer">
                <NuxtImg class="credits-card-propic" :src="`https://github.com/${author.github_nickname}.png`" />
                <div class="credits-card-content">
                    <span class="credits-card-name">{{ author.name }}</span>
                    <div class="credits-card-content-gh">
                        <Icon name="icons:mdi-github" size="24" />
                        <span class="credits-card-nickname">
                            {{ author.github_nickname }}
                        </span>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Credits',
    props: {
        authors: {
            type: Array,
            required: true,
            /* author object should be like:
                      {
                          name: 'Author Name',
                          github_nickname: '...',
                      }
                  */
        },
    }
}
</script>

<style>
.credits-container {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    max-width: 800px;
    grid-gap: 1em;

    align-items: start;
    justify-content: space-around;

    padding: 1em;

    background-color: var(--yellow-card);
    margin-bottom: 2em;
    color: #000;
}

.credits-card {
    width: auto;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: start;

    padding: 1em;

    background-color: var(--yellow-card);
    cursor: pointer;
}

.credits-card:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
}

.credits-card-content {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-left: 1em;
}

.credits-card-name {
    font-size: 1.5em;
    font-style: normal;
    font-weight: 600;
}

.credits-card-content-gh {
    display: flex;
    align-items: center;
}

.credits-card-nickname {
    margin-left: 0.5em;
    font-size: 1em;
    font-weight: 500;
    font-style: italic;
    color: rgba(0, 0, 0, 0.8);
}

.credits-card-propic {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-round);
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
    .credits-container {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        max-width: none;
    }

    .credits-card-propic {
        width: 80px;
        height: 80px;
    }

    .credits-card-name {
        font-size: 1.2em;
    }

    .credits-card-nickname {
        font-size: 0.8em;
    }
}
</style>
