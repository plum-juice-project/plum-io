<script>
import tags_data from '~/assets/tags.json'

export default {
    data: function() {
        return {
            tags: tags_data
        }
    },

    props: [ "tagName" ]
}
</script>

<template>
    <div class="tag_container" :style="{ backgroundColor: this.tags[this.tagName]?.color }">
        <p class="tag_text">{{ this.tags[this.tagName]?.display }}</p>
    </div>
</template>

<style scoped>
.tag_container {
    width: fit-content;
    height: 1.5em;
    padding: 0 0.5em 0 0.5em;
    border-radius: 0.25em;
}

.tag_text {
    font-weight: 600;
    font-size: 1em;
    color: white;
}
</style>