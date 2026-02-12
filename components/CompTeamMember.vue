<script>
import SingleTag from './SingleTag.vue';

export default {
    data: function() {
        return {
            mem_name: "",
            mem_gh: "",
            mem_use_pfp: false,
            mem_pfp_link: `/comp_team_imgs/${ this.memberObj.gh_handle }.jpg`,
            mem_link: `https://github.com/${this.memberObj.gh_handle}`,
            mem_tags: [],

            name_bg: `url(/highlights/BG_${this.memberIndex}.svg)`,
        }
    },

    async beforeMount() {
        this.mem_name = this.memberObj.name;
        this.mem_gh = this.memberObj.gh_handle;

        this.mem_use_pfp = this.memberObj.has_pfp;
        this.mem_pfp_link = this.mem_use_pfp ? `/comp_team_imgs/${ this.memberObj.gh_handle }.jpg` : "";

        this.mem_link = this.memberObj.custom_link ? this.memberObj.custom_link : this.mem_link;
        this.mem_tags = this.memberObj.tags;

        console.log(this.memberObj.tags);
    },

    props: [ "memberObj", "memberIndex" ]
}
</script>

<template>
    <NuxtLink :to="mem_link" target="_blank" rel="noopener noreferrer">
        <div class="member-shape">
            <div class="member-name-photo">
                <NuxtImg v-if="memberObj.has_pfp" class="member-photo" :src="mem_pfp_link" />
                <div v-else class="member-photo member-no-pfp">
                    <p class="member-no-pfp-letter">{{ mem_name[0] }}</p>
                </div>
                <p class="member-name">{{ mem_name }}</p>
            </div>
            <div class="member-github">
                <Icon name="icons:mdi-github" size="21" />
                <span class="member-gh-nickname">{{ mem_gh }}</span>
            </div>
            <div class="member-desc-roles">
                <div class="member-tags">
                    <SingleTag v-for="tag in mem_tags"
                        :tagName="tag"></SingleTag>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.member-shape {
    width: 18em;
    height: fit-content;
    background-color: var(--plum-purple-400);
   
    border-radius: 1.5em;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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

.member-no-pfp {
    max-width: 8em;
    
    padding: 0;
    margin: 0;

    background-color: var(--plum-purple-700);
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.member-no-pfp-letter {
    color: white;
    margin: 0;
    font-weight: 800;
    font-size: 4em;
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

.member-github {
    display: flex;
    align-items: center;
    gap: var(--space-halfunit);

    color: white;
}

.member-gh-nickname {
    font-size: 1.2em;
    font-weight: 400;

    text-align: center;

    color: white;
    font-family: "DM Mono";
}
</style>