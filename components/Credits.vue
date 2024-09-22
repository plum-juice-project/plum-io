<template>
    <div class="credits-container">
        <div v-if="authors.length == 1" class="credist-long-card">

        </div>
        <div v-else class="credits-short-card">

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
                    propic: '...', // URL
                }
            */
        }
    }
}
</script>

<style></style>