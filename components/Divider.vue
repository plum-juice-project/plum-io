<script>
export default {
    name: 'Divider',
    props: {
        color: {
            type: String,
            default: 'black'
        },
        nlines: {
            type: Number,
            default: 1
        },
        vspace: {
            type: String,
            default: '0'
        },
        width: {
            type: String,
            default: '70%'
        }
    },
}
</script>

<template>
    <div class="divider">
        <div v-for="n in nlines" :key="n" class="divider-line" :style="{
            'background-color': color, 'margin-top': vspace + 'px', 'margin-bottom': vspace + 'px', 'width': width
        }"></div>
    </div>
</template>

<style>
.divider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.divider-line {
    width: 100%;
    height: 1px;
    opacity: 30%;
}
</style>