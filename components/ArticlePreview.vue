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
  <!-- preview home page -->
  <NuxtLink class="h-auto" :to="'/blog/' + article.title.replaceAll(' ', '_').toLowerCase()">
    <div v-if="!extended" class="home-card13">
      <div class="home-image16">
        <!-- <img v-if="article.image" alt="image" src="/Characters/character-1.svg" class="home-image17" /> -->
      </div>
      <div class="home-content15">
        <span class="home-title">{{ article.title }}</span>
        <h3 class="home-caption">{{ article.description }}</h3>
      </div>
    </div>

    <!-- extended version -->
    <div v-else class="blog-card">
      <div class="blog-image">
        <img v-if="article.image" alt="image" :src=article.image />
        <Icon v-else name="icons:bx-image" size="7em" style="color: rgba(0,0,0,0.3)" />
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
  margin: 1em auto;

  width: 100%;
  min-height: 14em;
  height: auto;

  padding: var(--space-twounits);

  display: grid;
  grid-template-columns: 20% 80%;

  gap: var(--space-oneunit);
  background-color: var(--plum-purple-900);

  border-radius: var(--radius-oneunit);
  color: black;
}

.blog-card:hover {
  box-shadow: inset 0px 0px 100px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.blog-image {
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--plum-purple-800);

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 0px 3px var(--plum-purple-700);

  width: 100%;
  height: 100%;
}

.blog-image img {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  scale: 1.2;
  aspect-ratio: 4/3;
}

.blog-title {
  margin: 0 0 12px 0;
  font-size: 2em;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}

.blog-content {
  gap: var(--space-halfunit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: var(--space-oneunit);
}

.blog-caption {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  line-height: 1.5;
  max-height: calc(1.5 * 3em);
  font-size: 1.2em;

  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 767px) {
  .blog-card {
    width: 100%;
    grid-template-columns: 1fr;
  }
}

.home-card13 {
  width: 100%;
  min-height: 11em;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--plum-purple-800);
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
  max-height: calc(1.5 * 3em);
}

.home-image16 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
