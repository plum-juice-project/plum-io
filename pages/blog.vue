<template>
    <section class="title-header">
        <div class="title-header-content">
            <div class="title-heading">
                <h2 class="title-header-title">Blog</h2>
                <p class="title-paragraph">
                    Yes, we have a blog. It's a place where we share our thoughts, ideas, and experiences.
                </p>
            </div>
            <div class="blog-heading2">
                <div class="blog-content2">
                    <NuxtImg src="/double-plum.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    <section class="content-body">
        <div class="blog-sort-container">
            <div class="blog-sort-label-container">
                <!-- <span class="blog-sort-label"> sorted by: {{ sorting }}</span> -->
                <!-- <Icon class="blog-sort-icon" name="ep:arrow-down-bold" size="1em" style="color: black" /> -->
            </div>
        </div>
        <!-- <div v-if="showMenu" class="blog-sort-menu">
            <ul>
                <li><a href="#">Opzione 1</a></li>
                <li><a href="#">Opzione 2</a></li>
                <li><a href="#">Opzione 3</a></li>
            </ul>
        </div> -->
        <div class="blog-list">
            <div class="blog-list-empty" v-if="articles && !articles.length">
                <span>
                    Loading...
                </span>
            </div>

            <ArticlePreview v-for="article in articles" :key="article.id" :article="article" :extended="true" />
        </div>
        <!-- 
        <div v-if="isDataAvaible" class="blog-list-loadmore-container">
            <Button @click="loadMoreArticles" class="styled-link">
                Load More
            </Button>
        </div> -->
        <div class="blog-sort-container blog-list-loadmore-container styled-link unavaible">
            <span>
                You have reached the end 🤯
            </span>
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
            sorting: 'date',
            limit: 10,
            offset: 0,
            articles: [],
        }
    },

    setup() {
        const { data: articles } = useAsyncData('blog', async () => {
            try {
                const _posts = await queryContent('blog').sort({ date: -1 }).find();    
                return _posts;
            } catch (error) {
                console.error(error);
                return [];
            }
        });

        return {
            articles,
        }
    },

}
</script>

<style>
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

    margin-bottom: 10em;
}

.blog-list-empty {
    margin-top: 1em;
    width: 70vw;
    height: 22vh;

    padding: var(--space-oneandhalfunits);

    background-color: var(--plum-purple-900);

    border-radius: var(--radius-oneunit);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    color: var(--plum-purple-400);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: xx-large;
    font-weight: 600;
    font-style: italic;
}


.blog-sort-container {
    display: flex;
    justify-content: flex-end;

    padding: 1em;

    margin: auto;
    width: 100%;
    height: auto;

    background-color: var(--yellow-card);
}

.blog-sort-label-container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-right: 1em;
}

.blog-sort-label {
    color: black;
    font-size: 1em;
    font-weight: 600;
    font-style: italic;
    cursor: pointer;
}

.blog-sort-icon {
    padding-left: 2em;
}

.blog-list-loadmore-container {
    background-color: var(--plum-purple-500);
    text-align: center;
    justify-content: center;

    margin-bottom: 2em;
}

.blog-list-loadmore {
    text-decoration: none;
}

@media(max-width: 767px) {
    .blog-sort-container {
        width: 100%;
    }

    .blog-heading2 {
        display: none;
    }

    .title-header-content {
        grid-template-columns: 1fr;
    }

    .blog-paragraph {
        margin-top: 1em;
        font-size: 1.5em;
        line-height: 1.5em;
    }


}
</style>