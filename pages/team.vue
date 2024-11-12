<template>
    <section class="title-header">
        <div class="title-header-content">
            <div class="title-heading">
                <h2 class="title-header-title">Team</h2>
                <p class="title-paragraph">
                    Few but good! We are a small team of students...
                </p>
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
    grid-template: repeat(auto-fill, minmax(200px, 1fr)) / repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 9em;
    align-items: start;
    justify-content: center;

    width: 100%;
    height: auto;
    margin-bottom: 2em;
}
</style>