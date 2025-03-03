<template>
    <div class="error-header">
        <h1 class="error-header-title">Not found</h1>
        <span>The page you are looking for does not exist.</span>
    </div>
    <Divider color="white" vspace="20" />
    <div class="error-content">
        <h1 class="error-code-label">404</h1>
        <NuxtImg src="/dead-plum-250x250.png" />
    </div>
</template>

<script>
export default {
}
</script>

<style>
.error-header {
    text-align: left;
    color: #fff;
    font-size: 2em;
    font-weight: 700;

}

.error-header-title {
    font-size: 5em;
    color: #fff;
    font-weight: 700;
}

.error-code-label {
    font-size: 30em;
    color: #fff;
    font-weight: 700;
}

.error-content img {
    position: relative;
    bottom: 20em;

    scale: 4;
    float: right;

}
</style>