<script>
import SingleTag from './SingleTag.vue';

export default {
    data: function() {
        return {
            orientation: this.memberIndex % 2 === 0 ? 'left' : 'right',
            name_bg: `url(/highlights/BG_${this.memberIndex}.svg)`,
        }
    },

    props: [ "memberObj", "memberIndex" ]
}
</script>

<template>
    <div :class="['member-container']">
        <div class="member-shape">
            <div class="member-name-photo">
                <NuxtImg class="member-photo" :src="`/comp_team_imgs/${ memberObj.gh_handle }.jpg`" />
                <div class="member-name-bg" :style="{ backgroundImage: this.name_bg }">
                    <p class="member-name">{{ memberObj.name }}</p>
                </div>
            </div>
            <div class="member-desc-roles">
                <div class="member-tags">
                    <SingleTag v-for="tag in memberObj.tags"
                        :tagName="tag"></SingleTag>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.member-container {
    width: 18em;
    height: 21em;

    display: flex;
    flex-direction: row;
    align-items: center;
}

.member-left {
    justify-content: start;
}

.member-right {
    justify-content: end;
}

/* Applied to children of respectively .member-left and .member-right */
/*.member-left .member-shape {
    
}

.member-right .member-shape {
    
}*/

.member-shape {
    width: 300px;
    height: fit-content;
    background-color: var(--plum-purple-400);
   
    border-radius: 1.5em;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.member-name-photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.member-name-bg {
    width: 100%;
    height: 5.5em;

    margin: -1em 0 0 0;
    padding: 0 1.5em 0 1.5em;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-size: auto 17em;
    background-position: 50%;
    background-repeat: no-repeat;
}

.member-name {
    max-width: 100%;
    font-size: 2em;
    font-weight: 700;
    color: white;
    line-height: 1em;
    text-align: center;
}

.member-photo {
    width: 8em;
    height: 8em;
    border-radius: 100%;
    border: 8px solid var(--plum-purple-400);

    margin: -4em 0 0 0;
}

.member-desc-roles {
    max-width: 100%;
    height: auto;

    padding: 0.5em 0 0 0;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.member-desc {
    font-size: 1.4em;
    color: white;
    line-height: 1.4em;

    font-weight: 300;
}

.member-tags {
    margin: 1.5em 0 1.2em 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
}
</style>