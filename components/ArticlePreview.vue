<script>
export default {
  name: 'ArticlePreviewComponent',
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          title: 'Coming Soon',
          description: 'We need writers to write articles :p',
          image: '',
        }
      }
    },
    extended: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <NuxtLink :to="'/blog/' + article.title.replace(' ', '_').toLowerCase()">
    <div v-if="!extended" class="home-card13">
      <div class="home-image16">
        <!-- <img v-if="article.image" alt="image" src="/Characters/character-1.svg" class="home-image17" /> -->
      </div>
      <div class="home-content15">
        <span class="home-title">{{ article.title }}</span>
        <h3 class="home-caption">{{ article.description }}</h3>
      </div>
    </div>

    <div v-else class="blog-card">
      <div class="blog-image">
        <img v-if="article.image" alt="image" :src=article.image />
        <Icon v-else name="bx:image" size="7em" style="color: rgba(0,0,0,0.3)" />
      </div>
      <div class="blog-content">
        <h2 class="blog-title">{{ article.title }}</h2>
        <span class="blog-caption">{{ article.description }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style>
.blog-card {
  margin-top: 1em;

  width: 70vw;
  height: 22vh;

  padding: var(--space-oneandhalfunits);

  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background-color: var(--plum-purple-900);

  border-radius: var(--radius-oneunit);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  color: black;
}

.blog-image {
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--plum-purple-800);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  height: 100%;
}

.blog-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-readmore {
  text-decoration: none;
  color: var(--plum-purple-100);
  background-color: var(--plum-purple-900);
  padding: var(--space-halfunit) var(--space-oneunit);

  border-radius: var(--radius-oneunit);

  margin-top: auto;
  padding: 1em;

  white-space: nowrap;
  font-weight: 600;
}

.blog-readmore:hover {
  background-color: var(--plum-purple-800);
}

.blog-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}

.blog-content {
  gap: var(--space-halfunit);
  width: 100%;
  display: flex;
  padding: var(--space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
}

.blog-caption {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  line-height: 1.5;
  max-height: calc(1.5 * 3em);
}

@media (max-width: 767px) {
  .blog-card {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .blog-image {
    width: 100%;
    height: 50%;
  }

  .blog-content {
    width: 100%;
    height: 50%;
  }
}

.home-card13 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  color: black;
}

.home-content15 {
  gap: var(--space-halfunit);
  width: 100%;
  display: flex;
  padding: var(--space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
}

.home-caption12 {
  font-style: normal;
  font-weight: 600;
}

.home-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.home-caption {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  line-height: 1.5;
  max-height: calc(1.5 * 2em);
}

.home-image16 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
