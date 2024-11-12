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
    <NuxtLink class="flex items-center justify-center" :to="`https://github.com/${member.github_nickname}`"
        target="_blank" rel="noopener noreferrer">
        <div class="team-card">
            <div class="team-card-header">
                <NuxtImg class="team-card-propic" :src="`https://github.com/${member.github_nickname}.png`" />
            </div>
            <div class="team-card-content">
                <span class="team-card-name">{{ member.name }}</span>
                <div class="team-card-github">
                    <Icon name="icons:mdi-github" size="21" />
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

    transition: all 0.3s;

    width: 18em;
    height: 21em;
}

.team-card-header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    transform: translateY(50%);
}

.team-card-propic {
    width: 150px;
    height: 150px;
    align-items: start;

    background-color: var(--plum-purple-100);

    object-fit: fill;
    border-radius: 50%;
    border: 5px solid var(--plum-purple-400);

}

.team-card-content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    height: 100%;

    background-color: var(--plum-purple-400);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    padding: var(--space-twounits);

    overflow: hidden;
    white-space: nowrap;

    color: #fff;
}

.team-card-name {
    font-size: 1.8em;
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
    animation: scroll 5s linear alternate-reverse infinite;
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
