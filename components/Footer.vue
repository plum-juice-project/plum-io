<script setup lang="ts">
import UsefulLinks from './UsefulLinks.vue';
</script>

<template>
    <footer class="footer-container">
        <div class="flex flex-row items-start justify-between w-full mb-8 small-device">
            <div class="footer-left mr-6">
                <div class="footer-heading20">
                    <h2 class="footer-title">PlumJuice</h2>
                </div>
                <div class="w-full m-6 text-3xl md:m-0 md:mt-6 md:text-6xl">
                    <UsefulLinks />
                </div>
            </div>
            <div class="footer-right ml-6">
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
                        <NuxtLink class="footer-link" to="/competitive-team">Competitive Team</NuxtLink>
                        <NuxtLink class="footer-link" to="/hackathon">Hackathon</NuxtLink>
                        <!-- <NuxtLink class="footer-link  unavaible" to="#footer">Licenses</NuxtLink> -->
                    </div>
                </div>
            </div>
        </div>
        <span class="footer-copyright">© 2024-2026 Plum Juice. All Rights Reserved.</span>
    </footer>
</template>

<style>
.footer-container {
    width: 80%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
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

.footer-title {
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

.footer-link:hover {
    color: var(--plum-purple-700);
}

.footer-copyright {
    font-size: 0.8em;
    color: #fff;
    margin-bottom: 1em;
}

@media (max-width: 767px) {
        .footer-container {
            justify-content: center;
            padding: var(--space-fourunits) 1em 1em 1em;

            align-items: center;
        }

        .small-device{
            width: 100%;
            display: flex;
            flex-direction: column;
        }


        .footer-left {
            width: 100%;
            justify-content: center;
            align-items: center;
            padding: 0 0 1em 0;
        }

        .footer-title {
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
