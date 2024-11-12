<template>
    <footer class="home-footer">
        <div class="home-main6">
            <div class="home-branding">
                <div class="home-heading20">
                    <h2 class="home-logo3">Plum Juice</h2>
                </div>
            </div>
            <div class="footer-links">
                <div class="footer-list1">
                    <h3 class="footer-heading">Site</h3>
                    <div class="footer-items1">
                        <NuxtLink class="footer-link " to="/contacts">Contacts</NuxtLink>
                        <NuxtLink class="footer-link " to="/blog">Blog</NuxtLink>
                        <NuxtLink class="footer-link  unavaible" to="#roadmap">Roadmap</NuxtLink>
                        <NuxtLink class="footer-link " to="#home">Home</NuxtLink>
                    </div>
                </div>
                <div class="footer-list2">
                    <h3 class="footer-heading">Project</h3>
                    <div class="footer-items2">
                        <NuxtLink class="footer-link" to="/team">Team</NuxtLink>
                        <!-- <NuxtLink class="footer-link  unavaible" to="#home">Licenses</NuxtLink> -->
                    </div>
                </div>
            </div>
        </div>
        <span class="home-copyright">© 2024 Plum Juice. All Rights Reserved.</span>
    </footer>
</template>

<style>
.home-main6 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
}

.home-branding {
    gap: var(--space-threeunits);
    display: flex;
    max-width: 600px;
    align-items: flex-start;
    flex-direction: column;
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

.home-heading20 {
    gap: var(--space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.footer-heading {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
}

.home-footer {
    gap: var(--space-threeunits);
    width: 100%;
    display: flex;
    position: relative;
    max-width: 1440px;
    align-items: flex-start;
    padding-top: 120px;
    padding-left: var(--space-fiveunits);
    padding-right: var(--space-fiveunits);
    flex-direction: column;
    padding-bottom: var(--space-threeunits);
}

.home-logo3 {
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
}

.footer-links {
    gap: var(--space-sixunits);
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    color: #fff;
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

.home-copyright {
    font-size: 0.8em;
    color: #fff;
}

@media (max-width: 767px) {
    .home-footer {
        padding-top: var(--space-fourunits);
        padding-left: var(--space-twounits);
        padding-right: var(--space-twounits);
        flex-direction: column;
        align-items: center;
    }

    .home-main6 {
        gap: var(--space-threeunits);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .home-branding {
        max-width: 100%;
        align-items: center;
        text-align: center;
    }

    .home-logo3 {
        font-size: 24px;
        margin: auto;

    }

    .home-heading20 {
        gap: var(--space-oneunit);
    }

    .footer-items1,
    .footer-items2 {
        gap: var(--space-halfunit);
    }

    .footer-link {
        font-size: 16px;
    }

    .footer-links {
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
