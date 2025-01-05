<script>
export default {
    name: 'UsefulLinks',
    components: {
    }
}
</script>

<template>
    <!-- <div class="socials-list">
        <a href="https://github.com/plum-juice-project" target="_blank" rel="noopener noreferrer">
            <Icon name="icons:mdi-github" />
        </a>
        <a href="https://www.instagram.com/plumjuiceteam/" target="_blank" rel="noopener noreferrer">
            <Icon name="icons:mdi-instagram" />
        </a>
        <a href="https://t.me/plumjuiceteam/" target="_blank" rel="noopener noreferrer">
            <Icon name="icons:lineicons-telegram" />
        </a>
        <a href="https://www.paypal.com/pools/c/9a1rxxuhAY" target="_blank" rel="noopener noreferrer">
            <Icon name="icons:ic-baseline-paypal" />
        </a>
        <a href="https://www.patreon.com/PlumJuiceTeam?utm_campaign=creatorshare_creator" target="_blank"
            rel="noopener noreferrer">
            <Icon name="icons:ph-patreon-logo-fill" />
        </a>
    </div> -->
</template>


<style>
.socials-list {
    width: 50%;
    position: relative;
    float: left;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-auto-flow: column;

    gap: var(--space-twounits);

    margin:auto;
    color: #fff;
}

.socials-list a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    margin: 0;
    padding: 0;
}


.socials-list a:hover {
    color: var(--plum-purple-700);
}
</style>