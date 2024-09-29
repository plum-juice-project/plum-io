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
}
</script>
