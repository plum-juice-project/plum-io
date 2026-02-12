<template>
  <section class="title-header">
    <div class="title-header-content hackathon-title-header">
      <div class="title-heading">
        <h2 class="title-header-title">The hackathon!</h2>
        <span class="title-paragraph">
          Our first hackathon is past! We had a great time and we are looking forward to
          the next one
        </span>
        <div class="header-content">
          <span class="paragraph">
            Hey plummers! In the last couple of months we've been quite busy setting up
            new nodes on the cluster, arguing over git repositories' names
            (plumjuice-plumplum-wereallyjuicy-2-bis-new-final-forreal-finalfinal isn't
            that bad after all...), and most importantly planning and setting up our
            hackathon that took place on friday, February the 21st.
            <br />
            <NuxtLink to="/blog/we_really_did_it!" class="link-read-more"
              >Read more...</NuxtLink
            >
          </span>
        </div>
      </div>
    </div>
  </section>
  <section class="content-body">
    <div class="title-heading">
      <h2 class="title-header-title">The fun is not over!</h2>
      <span class="title-paragraph">
        We've heard some of you are eager to keep testing the project! So, guess what?
        We're keeping the systems up and running and extending the leaderboard updates for
        a while!
      </span>
    </div>
    <div class="body-content">
      <div class="body-content-container">
        <div class="body-content-heading">
          <h2 class="body-content-title">Leaderboard</h2>
        </div>
        <div class="body-content-leaderboard" v-if="results && results.data.length > 0">
          <LeaderBoard :data="results.data[0]" :title="results.titles[0]" />
          <LeaderBoard :data="results.data[1]" :title="results.titles[1]" />
        </div>
        <div v-else>
          <span class="lb-messagge-nodata"> 🫢 Leaderboard not available! 🫢</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import LeaderBoard from "~/components/LeaderBoard.vue";

function parseTeamResults(input) {
  const lines = input
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const header = lines[0].split(",").map((item) => item.trim());

  const projects = header.slice(1);

  const projectResults = projects.map(() => []);

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",").map((item) => item.trim());
    const teamName = parts[0];

    projects.forEach((proj, index) => {
      const rawResult = parts[index + 1];
      if (rawResult !== undefined && rawResult !== "") {
        const resultValue = parseFloat(rawResult);
        projectResults[index].push([teamName, resultValue]);
      }
    });
  }
  // sort by lowest time
  projectResults.forEach((project) => project.sort((a, b) => a[1] - b[1]));
  return projectResults;
}

const { data: results, error, refresh } = useAsyncData("leaderboard", async () => {
  try {
    const headers = {
      "Content-Type": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const response = await fetch(
      "https://api.github.com/gists/db5486a15396d83e39b3daa87bc28da0",
      { headers: headers }
    ).then((res) => res.json());

    const _data = response["files"]["juicy-hackathon-2025-results.csv"]["content"];

    return {
      data: parseTeamResults(_data),
      titles: _data.split("\n")[0].split(",").slice(1),
    };
  } catch (error) {
    console.error(error);
    console.log("Error fetching leaderboard data");
  }

  return;
});
</script>

<style>
.hackathon-title-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
}

.body-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: var(--space-fourunits);
}

.header-content {
  display: flex;
  margin-top: 2em;
}

.paragraph {
  font-size: 1.5em;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
}

.body-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;

  border: solid 2px var(--background-200);
  border-radius: 1em;
  padding: 2em;
}

.body-content-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
}

.body-content-title {
  font-size: 4em;
  font-weight: 700;
  margin-bottom: 0.5em;
  color: var(--plum-purple-900);
}

.body-content-leaderboard {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.lb-messagge-nodata {
  font-size: 2em;
  font-weight: 700;
  color: var(--yellow-card);
  margin-top: 2em;
  text-align: center;
}

.link-read-more {
  color: var(--plum-purple-500);
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 1400px) {
  .body-content-leaderboard {
    font-size: 0.8em;
    flex-direction: column;
    gap: var(--space-fourunits);
  }
}

@media (max-width: 768px) {
  .hackathon-title-header {
    margin-top: 2em;
  }

  .body-content-title {
    font-size: 2em;
  }

  .paragraph {
    font-size: 1em;
  }

  .body-content-container {
    padding: 1em;
  }

  .body-content-leaderboard {
    font-size: 0.5em;
    flex-direction: column;
    gap: var(--space-fourunits);
  }
}
</style>
