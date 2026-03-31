<script>
export default {
    data() {
        return {

        }
    },

    props: {
        scale: {
            type: Number,
            default: 1
        }   
    }
};
</script>


<template>
    <div class="grid grid-cols-2 md:grid-cols-4 basis-full gap-6">    
        <div>
            <NuxtLink to="https://www.kubii.com" target="_blank">
                <NuxtImg src="/Logo_Kubii-2023_ColoredPink.png" alt="Kubii Logo" :style="`transform: scale(${scale})`" />
            </NuxtLink>
        </div>
    </div>
</template>

