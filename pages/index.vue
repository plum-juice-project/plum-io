<template>
  <section class="home-hero" id="home">
    <div class="home-heading10">
      <h1 class="home-header11">It's not just a raspberry pi cluster</h1>
      <p class="home-caption10">It's like a fruit salad.</p>
    </div>
    <div class="home-buttons">
      <a
        href="https://github.com/plum-juice-project"
        target="_blank"
        rel="noopener noreferrer"
        class="styled-link"
        >View on Github</a
      >
    </div>
  </section>
  <section class="home-description10">
    <div class="home-container4">
      <div class="home-card11">
        <span class="home-bubble" />
        <div class="home-content12">
          <h2 class="home-header13">What we are aiming for?</h2>
          <span class="home-description10"
            >The goal of our project is to build a versatile and scalable infrastructure
            that can be used for various types of studies and analyses.</span
          >
          <ul class="home-bullet-list">
            <li>Explore the world of High Performance Computing</li>
            <li>
              Developing a flexible topology, adaptable to different needs and contexts.
            </li>
            <li>
              Implementing distributed and parallel algorithms for scientific computing
              and deep learning.
            </li>
            <li>
              Analyzing the network performance and hardware resources of the nodes.
            </li>
            <li>Providing a platform for future research and experimentation.</li>
          </ul>
        </div>
      </div>
      <div class="home-description11">
        <span class="home-paragraph1">
          We are a team of computer science students passionate about building and
          optimizing fast, distributed, and juicy architectures.
        </span>
        <span class="home-paragraph2">
          <p>
            <strong>PlumJuice</strong> is a small Raspberry Pi
            <strong>SLURM</strong> cluster created to experiment with different
            topologies, sharpen our parallel programming skills, and gain hands-on
            experience in setting up and maintaining a supercomputer.
          </p>
        </span>
      </div>
    </div>
  </section>
  <Divider color="white" vspace="50" />
  <section class="home-collection">
    <div class="home-content14">
      <div class="home-heading11">
        <h2 class="home-header15">Blog</h2>
        <span class="home-header16">
          Discover our work and how we maintain the cluster.
        </span>
      </div>
    </div>

    <div class="home-blog-divider-container"></div>
    <div class="home-main4">
      <!-- BLOG PREVIEW -->
      <ArticlePreview v-if="articles"
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />

      <!-- PLACEHOLDER -->
      <div
        v-if="articles && articles.length < MAX_ARTICLES"
        v-for="index in MAX_ARTICLES - articles.length"
        :key="index"
      >
        <div class="home-card13">
          <div class="home-content15">
            <span class="home-title">Coming Soon...</span>
            <h3 class="home-caption">We need writers to write articles :p</h3>
          </div>
        </div>
      </div>

      <!-- <div v-if="articles.length < MAX_ARTICLES" class="home-comings">
        <span class="home-comings-text">
          More articles soon...
        </span>
      </div> -->
    </div>
  </section>
  <!-- Divider color="white" vspace="50" />
  <section id="roadmap" class="home-roadmap">
    <div class="home-heading14">
      <h2 class="home-header21">Roadmap</h2>
      <span class="home-header22">
        Our plans for the future... <span class="home-emoji">🚀</span>
      </span>
    </div>
    <Roadmap /> 
    <h1 class="roadmap-cs">Coming Soon</h1>
  </section> 
  -->
</template>

<script setup>
import ArticlePreview from "@/components/ArticlePreview.vue";
import Roadmap from "@/components/Roadmap.vue";
import Divider from "~/components/Divider.vue";

const MAX_ARTICLES = 4;
let articles = [];

const { data, error, refresh } = useAsyncData("blog-preview", async () => {
  try {
    const _posts = await queryContent("blog")
      .sort({ date: -1 })
      .limit(MAX_ARTICLES)
      .find();
    return _posts;
  } catch (error) {
    console.error(error);
    return [];
  }
});

articles = data;
</script>

<style>
.home-blog-divider-container {
  margin-top: 1em;
  padding: 1em;
  width: 100%;
  height: auto;

  background-color: var(--yellow-card);
}
</style>
