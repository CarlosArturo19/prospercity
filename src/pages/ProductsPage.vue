<template>
    <FirstToolbar />
    <SecondToolbar/>
    <TopAboutSection/>
    <ListProductSection/>

</template>

<script>
     import FirstToolbar from '../components/FirstToolbar.vue';
     import SecondToolbar from '../components/SecondToolbar.vue';
     import TopAboutSection from '../components/TopAboutSection.vue';
     import ListProductSection from '../components/ListProductSection.vue';

     export default {
        name: 'Products Page',
    components:{
        FirstToolbar,
        SecondToolbar,
        TopAboutSection,
        ListProductSection,
    }
     }
</script>


<style>

</style>