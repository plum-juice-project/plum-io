<template>
  <section class="home-hero">
    <div class="home-heading10">
      <h1 class="home-header11">It's not just a raspberrypi cluster</h1>
      <p class="home-caption10">
        It's like a fruit salad.
      </p>
    </div>
    <div class="home-buttons">
      <a href="https://github.com/plum-juice-project" class="styled-link">View on Github</a>
    </div>
  </section>
  <section class="home-description10">
    <!-- <img alt="image" src="/hero-divider-1500w.png" class="home-divider-image" /> -->
    <div class="home-content10">
      <div class="home-container4">
        <div class="home-card11">
          <div class="home-avatar3">
            <!-- <img
              alt="image"
              src="/Avatars/default-avatar.svg"
              class="home-avatar4"
            /> -->
          </div>
          <div class="home-main2">
            <div class="home-content12">
              <h2 class="home-header13">What we aim?</h2>
              <p class="home-description10">The goal of our project is to build a versatile and scalable infrastructure
                that can be used for
                various types of studies and analyses.</p>
              <ul class="home-bullet-list">
                <li>
                  Explore the world of High Performance Computing
                </li>
                <li>
                  Developing a flexible topology, adaptable to different needs and contexts.
                </li>
                <li>
                  Analyzing the network performance and hardware resources of the nodes.
                </li>
                <li>
                  Evaluating energy consumption to improve system efficiency.
                </li>
                <li>
                  Providing a platform for future research and experimentation.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="home-description11">
          <p class="home-paragraph1">
            We are a team of digital aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat.
          </p>
          <p class="home-paragraph2">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>
    </div>
  </section>
  <Divider color="white" nlines="3" vspace="50" />
  <section class="home-collection">
    <div class="home-content14">
      <div class="home-heading11">
        <h2 class="home-header15">Blog</h2>
        <p class="home-header16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
    </div>
    <div class="home-main4">
      <!-- BLOG PREVIEW -->
      <ArticlePreview v-for="article in articles" :key="article.id" :article="article" />

      <!-- if the articles are not enough, fill with funny place holders -->
      <ArticlePreview v-for="index in MAX_ARTICLES - articles.length" :key="'placeholder-' + index" />
    </div>
  </section>
  <Divider color="white" nlines="3" vspace="50" />
  <section class="home-roadmap">
    <div class="home-heading14">
      <h2 class="home-header21">Roadmap</h2>
      <p class="home-header22">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
    </div>
    <Roadmap />
  </section>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview.vue'
import Roadmap from '@/components/Roadmap.vue'
export default {
  name: 'Home',
  props: {},
  components: {
    ArticlePreview,
    Roadmap
  },
  data() {
    return {
      rawhppm: ' ',
      rawr664: ' ',
      rawberf: ' ',
      rawdfft: ' ',
      rawjwcj: ' ',
      rawlzjn: ' ',
      rawg70o: ' ',
      rawd4s3: ' ',
      MAX_ARTICLES: 8,
      articles: [
        {
          id: 1,
          title: 'Article 1',
          description: 'Description 1',
          image: '/Characters/character-1.svg',
        },
        {
          id: 2,
          title: 'Article 2',
          description: 'Description 2',
          image: '/Characters/character-2.svg',
        },
        {
          id: 3,
          title: 'Article 3',
          description: 'Description 3',
          image: '/Characters/character-3.svg',
        },
        {
          id: 4,
          title: 'Article 4',
          description: 'Description 4',
          image: '/Characters/character-4.svg',
        },
      ],
    }
  },
  head: {
    title: 'Plum Juice',
  },
}

</script>

<style></style>
