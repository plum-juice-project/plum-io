<template>
    <footer class="home-footer">
        <div class="home-main6">
            <div class="home-branding">
                <div class="home-heading20">
                    <h2 class="home-logo3">Plum Juice</h2>
                    <p class="home-caption27">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
            </div>
            <div class="footer-links">
                <div class="home-list2">
                    <h3 class="home-heading21">Site</h3>
                    <div class="home-items1">
                        <router-link class="footer-link " to="/about">About</router-link>
                        <router-link class="footer-link " to="/blog">Blog</router-link>
                        <router-link class="footer-link  unavaible" to="#roadmap">Roadmap</router-link>
                        <router-link class="footer-link " to="#home">Home</router-link>
                    </div>
                </div>
                <div class="home-list3">
                    <h3 class="home-heading22">Project</h3>
                    <div class="home-items2">
                        <button class="footer-link">Team</button>
                        <button class="footer-link">Licenses</button>
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

.home-caption27 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    line-height: 27px;
}

.home-branding {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    max-width: 600px;
    align-items: flex-start;
    flex-direction: column;
}

.home-items1 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.home-items2 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.home-heading20 {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.home-heading21 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
}

.home-heading22 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
}

.home-footer {
    gap: var(--dl-space-space-threeunits);
    width: 100%;
    display: flex;
    position: relative;
    max-width: 1440px;
    align-items: flex-start;
    padding-top: 120px;
    padding-left: var(--dl-space-space-fiveunits);
    padding-right: var(--dl-space-space-fiveunits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-threeunits);
}

.home-logo3 {
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
}

.home-caption27 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    line-height: 27px;
}

.footer-links {
    gap: 120px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;

    color: #fff;
}

.home-list2 {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.home-list3 {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.home-items2 {
    gap: var(--dl-space-space-oneandhalfunits);
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

@media(max-width: 767px) {
    .home-footer {
        gap: var(--dl-space-space-oneandhalfunits);
        padding-top: var(--dl-space-space-fourunits);
        padding-left: var(--dl-space-space-oneandhalfunits);
        padding-right: var(--dl-space-space-oneandhalfunits);
    }

    .home-heading20 {
        gap: var(--dl-space-space-unit);
    }

    .home-logo3 {
        font-size: 20px;
        line-height: 24px;
    }

    .home-caption27 {
        width: 80%;
        font-size: 12px;
        line-height: 18px;
    }

    .home-list2 {
        gap: var(--dl-space-space-oneandhalfunits);
    }

    .home-list3 {
        gap: var(--dl-space-space-oneandhalfunits);
    }

}
</style>
