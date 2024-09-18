<script>
export default {
    head() {
        return {
        title: 'About Us',
        meta: [
            { hid: 'description', name: 'description', content: 'Learn more about our company' }
        ]
        }
    }
}
</script>

<template>
    <div class="about-container">
        <div class="about-header">
            <span class="about-title">About Us</span>
        </div>
        <div class="about-content">
            <p>Our company is the best company in the world. We do all the things.</p>
        </div>
    </div>
</template>

<style>

.about-container {
    margin: 0 auto;
    padding: 1em;

    /* debug */
    border: 2px solid white;
}

.about-header {
    border-bottom: 1px solid white;
    margin: 1em 0 1em 0;
    padding-bottom: 0.5em;
}

.about-title {
    margin-left: 0.5em;
    font-size: x-large;
    font-weight: bold;
    color: #a17ce2;
}

</style>