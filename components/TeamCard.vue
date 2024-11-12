<script>

export default {
    name: 'TeamCard',
    props: {
        member: {
            type: Object,
            required: true,
        },
        /* 
            member: {
                name: 'John Doe',
                role: 'Developer',
                github_nickname: 'johndoe',
                description: 'Lorem ipsum dolor sit amet,'
            }
        */
    },

    mounted() {
        this.scrollText()
    },

    methods: {
        scrollText() {
            const teamCardContent = this.$el.querySelector('.team-card-name')
            const teamCardContentWidth = teamCardContent.scrollWidth
            const teamCardContentParentWidth = teamCardContent.parentElement.clientWidth
            // add class scroll text
            if (teamCardContentWidth > teamCardContentParentWidth) {
                teamCardContent.classList.add('scroll-text')
            }
        }
    }
}
</script>

<template>
    <NuxtLink :to="`https://github.com/${member.github_nickname}`" target="_blank" rel="noopener noreferrer">
        <div class="team-card">
            <div class="team-card-header">
                <NuxtImg class="team-card-propic" :src="`https://github.com/${member.github_nickname}.png`" />
            </div>
            <div class="team-card-content">
                <span class="team-card-name">{{ member.name }}</span>
                <div class="team-card-github">
                    <Icon name="icons:mdi-github" size="18" />
                    <span class="team-card-nickname">{{ member.github_nickname }}</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style>
.team-card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    background-color: var(--plum-purple-400);
    cursor: pointer;

    border-radius: var(--radius-radius4);

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    width: 17em;
    height: 26em;

    overflow: hidden;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.team-card-header {
    width: 100%;
    height: 60%;

    display: flex;
    justify-content: center;
}

.team-card-propic {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.team-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40%;

    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;

    gap: var(--space-oneunit);

    overflow: hidden;
    white-space: nowrap;
}

.team-card-name {
    font-size: 2em;
    font-weight: 600;
    text-align: center;
}

.team-card-nickname {
    font-size: 1.2em;
    font-weight: 400;
    font-style: italic;

    text-align: center;
}

.scroll-text {
    display: inline-block;
    padding-left: 100%;
    animation: scroll 10s forwards infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(10%);

    }

    100% {
        transform: translateX(-50%);
    }
}

.team-card-github {
    display: flex;
    align-items: center;
    gap: var(--space-halfunit);
}
</style>
