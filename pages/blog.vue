<template>
    <section class="blog-header">
        <div class="blog-header-content">
            <div class="blog-heading11">
                <h2 class="home-header15">Blog</h2>
                <p class="blog-paragraph">
                    Yes, we have a blog. It's a place where we share our thoughts, ideas, and experiences.
                </p>
            </div>
            <div class="blog-heading2">
                <div class="blog-content2">
                    <img src="assets/double-plum.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="blog-sort-container">
            <span class="blog-sort-label"> sorted by: {{ sorting }}</span>
            <Icon class="blog-sort-icon" name="ep:arrow-down-bold" size="1em" style="color: black" />
        </div>
        <div class="blog-list">
            <!-- BLOG PREVIEW -->
            <ArticlePreview v-for="article in articles" :key="article.id" :article="article" :extended="true" />
        </div>

        <div class="blog-list-loadmore-container" v-if="isDataAvaible">
            <Button @click="loadMoreArticles" class="blog-list-loadmore">Load More</Button>
        </div>
    </section>
</template>

<script>
import ArticlePreview from '~/components/ArticlePreview.vue'
export default {
    components: {
        ArticlePreview,
    },
    data() {
        return {
            articles: [],
            sorting: 'date',
            limit: 10,
            offset: 0,
            isDataAvaible: true,
        }
    },
    methods:
    {
        async countArticles() {
            const count = await queryContent().count();
            return count;
        },
        async fetchArticles() {
            this.articles = await queryContent().skip(this.offset).limit(this.limit).sort({ date: -1 }).find();
            if (await this.countArticles() <= this.articles.length) {
                this.isDataAvaible = false;
            }
        },

        async loadMoreArticles() {
            this.offset += this.limit;
            this.articles = this.articles.concat(await queryContent().skip(this.offset).limit(this.limit).sort({ date: -1 }).find());
            if (await this.countArticles() <= this.articles.length) {
                this.isDataAvaible = false;
            }
        }
    },

    mounted() {
        this.fetchArticles()
    }

}
</script>

<style>
.blog-header {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    max-width: 1440px;
    align-items: flex-start;
    padding-left: var(--dl-space-space-fiveunits);
    padding-right: var(--dl-space-space-fiveunits);
    flex-direction: column;
    padding-bottom: 160px;
}

.blog-header-content {
    display: flex;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
}

.blog-heading2 {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.blog-content2 {
    height: 8em;
    width: 35em;

    margin-top: 5em;

    overflow-y: visible;
    background-color: var(--yellow-card);
}

.blog-content2 img {
    scale: 0.8;
    width: inherit;

    position: relative;
    bottom: 9em;
}

.blog-list {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    padding-bottom: 10em;
}

.blog-paragraph {
    color: rgb(255, 255, 255);
    font-size: 40px;
    line-height: 60px;
    margin-right: 3em;
}

.blog-sort-container {
    display: flex;
    justify-content: flex-end;

    padding-right: 5em;

    margin: auto;
    width: auto;
    height: auto;

    background-color: var(--yellow-card);
}

.blog-sort-label {
    color: var(--dl-color-color-black);
    font-size: 1em;
    font-weight: 600;

    padding: 1em;
    font-style: italic;
}

.blog-sort-icon {
    cursor: pointer;
}

.blog-list-loadmore-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2em;

    background-color: var(--yellow-card);

    margin: auto;
}

.blog-list-loadmore {
    text-decoration: none;
}
</style>