<script>
export default {
    name: 'TeamTag',
    props: {
        role: {
            type: String,
            required: true
        }
        /*
            role: "<name>:<bgcolor>:<fontcolor>"
                example -> "CEO:#eb4034:#fff"
        */
    },

    methods: {
        getColor() {
            if (this.role.split(':').length == 3) {
                return this.role.split(':')[2];
            }
            return '#000';
        },
        getBgColor() {
            if (this.role.split(':').length > 1) {
                return this.role.split(':')[1];
            }
            return "#FFCF77";
        },
        getName() {
            return this.role.split(':')[0];
        }
    }
}
</script>

<template>
    <div class="team-tag" :style="{ backgroundColor: getBgColor(), color: getColor() }">
        {{ getName() }}

    </div>
</template>

<style>
.team-tag {
    width: fit-content;
    height: fit-content;
    max-width: max-content;
    max-height: max-content;
    border-radius: 0.25rem;

    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    text-align: center;
    line-height: 1;

    cursor: default;
    user-select: none;
    transition: background-color 0.3s, color 0.3s;
}
</style>