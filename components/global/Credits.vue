<template>
    <div class="credits-container">
        <div v-for="(author, i) in authors" :key="i" class="credits-card">
            <NuxtImg class="credits-card-propic" :src="`https://github.com/${author.github_nickname}.png`" />
            <div class="credits-card-content">
                <span class="credits-card-name">{{ author.name }}</span>
                <div class="flex">
                    <NuxtImg class="credits-card-gh-logo" src="/github-mark.svg" />
                    <a :href="`https://github.com/${author.github_nickname}`" class="credits-card-nickname">
                        {{ author.github_nickname }}
                    </a>
                </div>
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
            required: true,
            /* author object should be like:
                      {
                          name: 'Author Name',
                          github_nickname: '...',
                      }
                  */
        },
        date: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.credits-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    /* Ridotto min-width per gestire più autori */
    grid-gap: 1rem;
    /* Aggiunta distanza tra le card */
    align-items: start;
    padding: 1rem;
    background-color: var(--yellow-card);
    margin-bottom: 2em;
    color: #000;
}

.credits-card {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 1rem;
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
    padding-left: 1rem;
}

.credits-card-name {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 600;
}

.credits-card-gh-logo {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
}

.credits-card-nickname {
    font-size: 1rem;
    font-weight: normal;
}

.credits-card-propic {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-round);
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
