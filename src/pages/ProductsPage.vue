<template>
    <FirstToolbar />
    <SecondToolbar/>
    <TopAboutSection/>
    <ListProductSection/>
    <footer class="ftco-footer">
        <FirstFooter />
        <SecondFooter />
    </footer>
</template>

<script>
     import FirstToolbar from '../components/FirstToolbar.vue';
     import SecondToolbar from '../components/SecondToolbar.vue';
     import TopAboutSection from '../components/TopAboutSection.vue';
     import ListProductSection from '../components/ListProductSection.vue';
      import FirstFooter from '../components/FirstFooter.vue';
      import SecondFooter from '../components/SecondFooter.vue';

     export default {
        name: 'Products Page',
    components:{
        FirstToolbar,
        SecondToolbar,
        TopAboutSection,
        ListProductSection,
        FirstFooter,
        SecondFooter
    }
     }
</script>


<style>

</style>