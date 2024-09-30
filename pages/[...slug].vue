<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <template v-if="doc">
        <div class="doc-container">
          <!-- Table of Contents -->
          <div class="doc-toc-container">
            <ol class="doc-toc">
              <li v-for="(link, i) in doc.body.toc.links" :key="link.id">
                <a :href="`#${link.id}`">{{ link.text }}</a>
                <ol v-for="(sublink, j) in link.children" :key="sublink.id">
                  <a :href="`#${sublink.id}`">{{ sublink.text }}</a>
                </ol>
              </li>
            </ol>
          </div>

          <!-- Article Content -->
          <div class="doc-content">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </template>

      <!-- Fallback if document is not found -->
      <template v-else>
        <DocNotFound />
      </template>
    </ContentDoc>
  </main>
</template>


<script>
import('assets/css/article.css')
import DocNotFound from '~/components/DocNotFound.vue';
export default {
  components: {
    DocNotFound,
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const tocLink = document.querySelector(`a[href="#${entry.target.id}"]`);
          if (entry.isIntersecting) {
            tocLink.classList.add('active');
          } else {
            tocLink.classList.remove('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the heading is visible
      }
    );

    document.querySelectorAll('.doc-content h1, .doc-content h2')
      .forEach((heading) => {
        observer.observe(heading);
      });
  },
}
</script>
