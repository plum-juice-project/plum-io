<template>
    <VueNextTimeline :items="items" />
</template>

<script>
export default {

    data() {
        const item1 = {
            title: '2013',
            content: 'The international year of mathematics on planet Earth. The international year of mathematics on planet Earth',
            color: '#2785ab'
        }
        const item2 = {
            title: '2014',
            content: 'International Year of Family Farming',
            color: '#f89714'
        }
        const item3 = {
            title: '2015',
            content: 'International Year of Light and Light-Based Technologies',
            color: '#f65b78'
        }
        const items = [item1, item2, item3]

        return { items }
    }
};
</script>
