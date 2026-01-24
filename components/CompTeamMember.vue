<script>
import SingleTag from './SingleTag.vue';

export default {
    data: function() {
        return {
            orientation: this.memberIndex % 2 === 0 ? 'left' : 'right',
            name_bg: `url(/highlights/BG_${this.memberIndex}.svg)`,
        }
    },

    mounted() {
        console.log(this.name_bg)
    },

    props: [ "memberObj", "memberIndex" ]
}
</script>

<template>
    <div :class="['member-container', `member-${orientation}`]">
        <div class="member-shape">
            <div class="member-name-photo">
                <NuxtImg class="member-photo" :src="`/comp_team_imgs/${ this.memberObj.gh_handle }.jpg`" />
                <div class="member-name-bg" :style="{ backgroundImage: this.name_bg }">
                    <p class="member-name">{{ memberObj.name }}</p>
                </div>
            </div>
            <div class="member-desc-roles">
                <p class="member-desc" v-html="memberObj.bio"></p>
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
    width: 100%;
    height: fit-content;

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
    width: 550px;
    height: 100%;
    background-color: var(--plum-purple-400);
   
    border-radius: 1.5em;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    padding: 0 0 0 1.75em;
}

.member-name-photo {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1em;
}

.member-name-bg {
    width: fit-content;
    height: 2.5em;

    margin: -1em 0 0 0;
    padding: 0 0.5em 0 0.5em;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.member-name {
    font-size: 2em;
    font-weight: 700;
    color: white;
}

.member-photo {
    width: 8em;
    height: 8em;
    border-radius: 100%;
    border: 8px solid var(--plum-purple-400);

    margin: -4em 0 0 0;
}

.member-desc-roles {
    width: 100%;
    height: fit-content;

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
    justify-content: start;
    align-items: center;
    gap: 0.25em;
}
</style>