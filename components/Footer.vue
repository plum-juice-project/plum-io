<script setup lang="ts">
import UsefulLinks from './UsefulLinks.vue';
</script>

<template>
    <footer class="footer-container">
        <div class="footer-left">
            <div class="footer-heading20">
                <h2 class="footer-logo3">Plum Juice</h2>
                <div class="text-6xl">
                    <UsefulLinks />
                </div>
                <span class="footer-copyright">© 2024 Plum Juice. All Rights Reserved.</span>
            </div>
        </div>
        <div class="footer-right">
            <div class="footer-list1">
                <h3 class="footer-heading">Site</h3>
                <div class="footer-items1">
                    <NuxtLink class="footer-link " to="/contacts">Contacts</NuxtLink>
                    <NuxtLink class="footer-link " to="/blog">Blog</NuxtLink>
                    <NuxtLink class="footer-link  unavaible" to="#roadmap">Roadmap</NuxtLink>
                    <NuxtLink class="footer-link " to="/">Home</NuxtLink>
                </div>
            </div>
            <div class="footer-list2">
                <h3 class="footer-heading">Project</h3>
                <div class="footer-items2">
                    <NuxtLink class="footer-link" to="/team">Team</NuxtLink>
                    <!-- <NuxtLink class="footer-link  unavaible" to="#footer">Licenses</NuxtLink> -->
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer-container {
    width: 80%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;

    padding: var(--space-sixunits);
}

.footer-left {
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-right {
    width: auto;
    gap: var(--space-sixunits);
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    color: #fff;
}

.footer-items1 {
    gap: var(--space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-items2 {
    gap: var(--space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-heading20 {
    gap: var(--space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 60%;
    max-width: 600px;
}

.footer-heading {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
}


.footer-logo3 {
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
}



.footer-list1 {
    gap: var(--space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-list2 {
    gap: var(--space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-items2 {
    gap: var(--space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-link {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
}

.footer-copyright {
    font-size: 0.8em;
    color: #fff;
}

@media (max-width: 767px) {
    .footer-container {
        padding-top: var(--space-fourunits);
        padding-left: var(--space-twounits);
        padding-right: var(--space-twounits);
        flex-direction: column;
        align-items: center;
    }

    .footer-main6 {
        gap: var(--space-threeunits);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .footer-left {
        max-width: 100%;
        align-items: center;
        text-align: center;
    }

    .footer-logo3 {
        font-size: 24px;
        margin: auto;

    }

    .footer-heading20 {
        gap: var(--space-oneunit);
    }

    .footer-items1,
    .footer-items2 {
        gap: var(--space-halfunit);
    }

    .footer-link {
        font-size: 16px;
    }

    .footer-right {
        width: 100%;
        justify-content: space-around;
    }

    .footer-list1,
    .footer-list2 {
        gap: var(--space-two-units);
        align-items: left;
    }
}
</style>
