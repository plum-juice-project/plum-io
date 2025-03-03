<template>
    <section class="title-header">
        <div class="title-header-content">
            <div class="title-heading">
                <h2 class="title-header-title">Team</h2>
                <span class="title-paragraph">
                    Meet the gang!
                    These are the cooks who made the Plum Juice.
                </span>
            </div>
            <div class="team-header-img">
                <NuxtImg src="/drinkself-plum.png" />
            </div>
        </div>
    </section>
    <section class="content-body">
        <div class="team-list">
            <TeamCard v-for="member in team" :key="member.github_nickname" :member="member" />
        </div>
    </section>
</template>

<script>
import teamData from '~/assets/team.json'
export default {
    data() {
        return {
            team: teamData,
        }
    },
}
</script>

<style>
.team-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em 9em;

    align-items: start;
    justify-content: center;

    width: 100%;

    margin-bottom: 4em;
}

.team-header-img {
    width: 300px;
    height: 300px;

    margin-left: 12em;

    display: flex;
    background-color: var(--yellow-card);

    border-radius: 50%;

    justify-content: end;
    align-items: center;
}

.team-header-img img {
    width: 200px;
    height: 200px;
    scale: 1.5;
    object-fit: cover;
}

@media (max-width: 1024px) {
    .team-header-img {
        margin-left: 0;
    }
}

@media (max-width: 768px) {
    .team-header-img {
        display: none;
    }
}
</style>