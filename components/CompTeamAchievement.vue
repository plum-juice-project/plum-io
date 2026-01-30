<script>
export default {
    props: [ "isFirst", "isLast", "achObj" ]
}
</script>

<template>
    <div :class="['sep-line', 'sep-dashed', isFirst ? 'sep-first-line' : '' ]"></div>
    <div class="ach-container">
        <div class="ach-first-part">
            <div class="achievement-type-bg" v-if="achObj.type === 'competition'">
                <NuxtImg src="computer-logo.png" class="achievement-type-img"></NuxtImg>
            </div>
        </div>
        <div class="ach-second-part">
            <div>
                <h3 class="achievement-title">{{ achObj.title }}</h3>
                <p class="achievement-date">{{ achObj.timing }}</p>
                <p class="achievement-description">{{ achObj.description }}</p>
            </div>
            <div class="achievement-ranking" v-if="achObj.completed === true">
                <NuxtImg src="/icons/trophy-solid-full.svg" class="ach-cup"></NuxtImg>
                <p class="achievement-ranking-text">{{ achObj.ranking }}</p>
            </div>
        </div>
    </div>
    <div class="ending-spacer" v-if="isLast"></div>
</template>

<style scoped>
.ach-container {
    width: var(--ach-container-width);
    height: 250px;

    background-color: var(--background-300);
    border-radius: 1em;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
    
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
}

.achievement-type-bg {
    width: 3em;
    height: 3em;
    background-color: var(--yellow-card);
    border-radius: 0 1em 0 1em;

    display: flex;
    justify-content: center;
    align-items: center;
}

.achievement-type-img {
    width: 90%;
}

.ach-first-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0;
}

.achievement-title {
    color: white;
    font-weight: 700;
    font-size: 1.5em;
    margin: 1em 0 0.5em 0;
    text-align: center;
}

.achievement-date {
    color: white;
    font-weight: 300;
    margin: -1em 0 1em 0;
    text-align: center;
}

.achievement-description {
    color: white;
    text-align: center;
}

.ach-second-part {
    height: 100%;
    margin: -3em 0 0 0;
    padding: 0 1em 1em 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
}

.achievement-ranking {
    width: auto;
    height: 40px;
    background-color: var(--background-500);

    border-radius: 1.5em;
    padding: 0 1em 0 1em;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.ach-cup {
    height: 80%;
}

.achievement-ranking-text {
    color: white;
    font-weight: 900;
    font-size: 1.15em;
}



.sep-first-line {
    width: calc(50% - calc(var(--ach-container-width) / 2)) !important;
}

.sep-line {
    height: 12px;
    width: 200px;

    background-color: transparent;
    flex-shrink: 0;
}

.sep-dashed {
    border-top: 1px dashed gray;
}

.ending-spacer {
    width: calc(50% - calc(var(--ach-container-width) / 2));
    background-color: transparent;
    height: 1px;
    flex-shrink: 0;
}
</style>