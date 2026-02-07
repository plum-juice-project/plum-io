<script>
import CompTeamMember from '~/components/CompTeamMember.vue';
import CompTeamTimeline from '~/components/CompTeamTimeline.vue';
import team_comp_data from '~/assets/hpc-team.json';

export default {
    data: function() {
        return {
            team_comp_data: team_comp_data
        }
    }
}
</script>

<template>
  <section class="title-header">
    <div class="title-header-content">
      <div class="title-heading">
        <h2 class="title-header-title">HPC Competitive Team</h2>
        <span class="title-paragraph">
          Here to trailblaze the path to the most prestigious HPC-related competitions! 
        </span>
      </div>
      <div class="team-header-img">
        <NuxtImg src="/computer-logo.png" class="fit_image" />
      </div>
    </div>
  </section>
  <section class="content-body">
    <div class="title-heading">
      <span class="title-paragraph-low">
        The HPC Competitive Team was born in 2025 when a group of students decided to participate to the <mark>IndySCC25</mark>, an HPC-based competition hosted by SuperComputing. They all come from <mark>different backgrounds</mark>, hence making the team a true <b>fruit salad</b>! Here's the whole team:
      </span>
    </div>
    <div class="team-members-showcase" v-if="team_comp_data !== null">
      <CompTeamMember v-for="[index, member] in team_comp_data.entries()" 
        :memberObj="member" 
        :memberIndex="index"></CompTeamMember>
    </div>
    <div class="title-heading">
      <h2 class="section-title">Our achievements</h2>
      <span class="title-paragraph-low">
        Although we haven't participated in many competitions (<i>yet!</i>), we strive to compete in more, to have an <mark>ever-growing team</mark> and spread the marvels of HPC. Are you curious about how far we got? Just have a look below
      </span>
    </div>
	<CompTeamTimeline></CompTeamTimeline>
  </section>
</template>

<style scoped>
.team-header-img {
    margin-left: 6em;
}

.title-header-title {
    font-size: 2.5em !important;
    font-weight: 600;
    margin: 0 0 0.5em 0;
}

.title-paragraph, .title-paragraph-low {
    color: white;
    font-size: 1.75em !important;
    margin: 0;
    line-height: 2em;
}

.title-paragraph-low {
    line-height: 1.5em;
}

.title-paragraph {
    font-size: 1.75em !important;
    margin: 0;
    line-height: 1.5em;
}

.title-heading {
    width: 100% !important;
}

.fit_image {
    width: 90%;
}

.team-members-showcase {
  width: 100%;
  margin: 8em 0 8em 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 6em 7em;
  align-items: start;
  justify-content: center;
}

.section-title {
    font-size: 3em;
	font-weight: 600;
	color: white;
	margin: 0 0 0.5em 0;
}
</style>