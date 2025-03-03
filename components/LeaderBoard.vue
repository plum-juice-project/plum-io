<template>
  <div class="lb-container">
    <h2 class="lb-title">{{ title }}</h2>
    <table class="lb-table">
      <thead class="lb-header">
        <tr class="lb-row">
          <th>Rank</th>
          <th>Team</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody class="lb-body">
        <tr class="lb-row" v-for="(row, index) in data" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row[0] }}</td>
          <td>{{ row[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Leaderboard",
  props: {
    title: {
      type: String,
      default: "Leaderboard",
    },
    data: {
      type: Array,
      default: [],
      // [[team1, res1, res2], [team2, res1, res2], ...]
    },
  },
};
</script>

<style>
.lb-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.lb-table {
  width: 90%;
  border-collapse: collapse;
  border-radius: 0.1em;
  overflow: hidden;
  table-layout: fixed; /* Mantiene una larghezza fissa per le colonne */
}

.lb-title {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 1em;
  color: var(--plum-purple-800);
  text-decoration: double overline underline var(--pink-card);
}

.lb-header {
  background-color: var(--plum-purple-500);
  color: #fff;
  font-weight: 700;
}

.lb-header th {
  padding: 1em;
  text-align: center;
}

.lb-body {
  width: 100%;
}

.lb-row {
  display: table-row;
  width: 100%;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
}

.lb-row td {
  padding: 1em;
  text-align: center;
}

tbody tr:nth-child(odd) {
  background-color: #fcf0da;
}

tbody tr:nth-child(even) {
  background-color: #e9e9e9;
}

tbody tr:nth-child(1) {
  border: solid 4px var(--yellow-card);
  /*upper case*/
  text-transform: uppercase;
  font-weight: 700;
}
</style>
