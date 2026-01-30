<script>
import CompTeamAchievement from "~/components/CompTeamAchievement.vue";
import achievements from '~/assets/achievements.json';

export default {
    data: function() {
        return {
            achievements: achievements
        }
    }
}
</script>

<template>
    <div class="achievements-container">
        <CompTeamAchievement v-for="[idx, item] in achievements.entries()"
        :isFirst="idx === 0" :isLast="idx === (achievements.length - 1)" :achObj="item"></CompTeamAchievement>
    </div>
</template>

<style scoped>
.achievements-container {
    width: 100%;
    height: max-content;

    margin: 2em 0 4em 0;
    padding: 1em 0 1em 0;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    overflow-x: scroll;
    overflow-y: hidden;
}
</style>