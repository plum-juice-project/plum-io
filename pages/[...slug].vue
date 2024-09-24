<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <DocNotFound />
      </template>
    </ContentDoc>
  </main>
</template>

<script>
import DocNotFound from '~/components/DocNotFound.vue';
export default {
}
</script>