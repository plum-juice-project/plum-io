<template>
    <div class="error-header">
        <h1 class="error-header-title">Not found</h1>
        <span>The page you are looking for does not exist.</span>
        <!-- <NuxtImg src="/dead-plum-250x250.png" loading="lazy" /> -->
    </div>
    <Divider color="white" vspace="20" />
    <div class="error-content">
        <h1 class="error-code-label">404</h1>
    </div>
</template>

<script>
export default {
    name: 'DocNotFound'
}
</script>

<style>
.error-header {
    text-align: left;
    color: #fff;
    font-size: 2em;
    font-weight: 700;
    justify-content: start;
}

.error-header img {
    position: relative;
    left: 22em;
    top: -5em;
    scale: 2.5;

    margin: 0;
}


.error-header-title {
    font-size: 5em;
    color: #fff;
    font-weight: 700;
}

.error-code-label {
    font-size: 20em;
    color: var(--plum-purple-700);
    font-weight: 700;
}

.error-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>