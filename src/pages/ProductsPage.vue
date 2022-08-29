<template>
    <FirstToolbar />
    <SecondToolbar/>
    <TopAboutSection title="Productos"/>
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
        },
        mounted()
        {
            window.scroll(0, 440);
        }
     }
</script>


<style>

</style>