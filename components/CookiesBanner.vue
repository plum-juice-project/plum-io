<script>
export default{
    name: 'CookiesBanner',
    data(){
        return{
            showBanner: true
        }
    },
    methods:{
        closeBanner(){
            this.showBanner = false;
        }
    }
}
</script>

<template>
    <div class="cookies-container">
        <div class="cookies-content">
            <p>We do not collect any personal data on this website. However, some third-party services we use (such as
                analytics or advertising) may collect data in accordance with their own privacy policies. By clicking
                "Accept", you consent to the use of these cookies and similar technologies.</p>
            <button @click="closeBanner">Got it!</button>
        </div>
        <div class="cookies-bottom">
            
        </div>
    </div>
</template>

<style>
</style>