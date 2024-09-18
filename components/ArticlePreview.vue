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
          image: '/Characters/character-1.svg',
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

  <div v-if="!extended" class="home-card13">
    <div class="home-image16">
      <!-- <img
              alt="image"
              src="/Characters/character-1.svg"
              class="home-image17"
            /> -->
    </div>
    <div class="home-content15">
      <span class="home-caption12">{{ article.title }}</span>
      <h3 class="home-title1">{{ article.description }}</h3>
    </div>
  </div>

  <div v-else class="blog-card">
    <div class="blog-image">
      <!-- <img
              alt="image"
              src="/Characters/character-1.svg"
              class="home-image17"
            /> -->
    </div>
    <div class="blog-content">
      <h2 class="blog-title">{{ article.title }}</h2>
      <span class="blog-caption">{{ article.description }}</span>
    </div>
    <router-link class="blog-readmore" :to="article.title.replace(' ', '_').toLowerCase()"> Read more </router-link>
  </div>
</template>

<style>


.blog-card {
  margin-top: 1em;

  width: 70vw;
  height: 22vh;

  padding: var(--dl-space-space-oneandhalfunits);

  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background-color: var(--plum-purple-900);

  border-radius: var(--dl-radius-radius-oneunit);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.blog-image {
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--plum-purple-800);

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
  padding: var(--dl-space-space-halfunit) var(--dl-space-space-oneunit);

  border-radius: var(--dl-radius-radius-oneunit);

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
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
}

.blog-caption {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  /* Limita a 3 righe */
  line-height: 1.5;
  /* Imposta l'altezza della linea */
  max-height: calc(1.5 * 3em);
  /* Calcola l'altezza massima in base al numero di righe */
}

.home-card13 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
}

.home-content15 {
  gap: var(--dl-space-space-halfunit);
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
}

.home-caption12 {
  font-style: normal;
  font-weight: 600;
}

.home-title1 {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.home-image16 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
