<template>
  <main>
    <ContentDoc>
    <template v-slot="{ doc }">
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
          <div class="doc-content-date">
            <Icon name="icons:mdi-receipt-text-edit" style="opacity: 0.7; margin-right: 0.6em;" />
            <span>{{ dateParser(doc.date) }}</span>
          </div>
          <Divider color="white" width="100%" vspace="40" />
          <span class="plum-article-title">{{ doc.title }}</span>
          <ContentRenderer class="mt-10" :value="doc" />
        </div>
      </div>

    </template>
    <!-- Not Found -->
    <template #not-found>
      <DocNotFound />
    </template>

    </ContentDoc>
  </main>
</template>


<script>

import('assets/css/article.css')
export default {

  afterMount() {
    if (!doc){return;}
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const tocLink = document.querySelector(`a[href="#${entry.target.id}"]`);
          if (entry.isIntersecting) {
            try {
              tocLink.classList.add('active');
            } catch (error) {
            }
          } else {
            try {
              tocLink.classList.remove('active');
            } catch (error) {
            }
          } // find a different way to do this
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
  methods: {
    dateParser(date) {
      const [year, month, day] = date.split("T")[0].split('-');
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return `${day} ${months[month - 1]} ${year}`;
    }
    },
}
</script>
