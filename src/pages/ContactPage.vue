<template>
    <FirstToolbar/>
    <SecondToolbar/>
    <TopAboutSection title="Contacto"/>
    <ContactSection/>
        <footer class="ftco-footer">
        <FirstFooter />
        <SecondFooter />
    </footer>
</template>

<script>
    import FirstToolbar from '../components/FirstToolbar.vue';
    import SecondToolbar from '../components/SecondToolbar.vue';
    import TopAboutSection from '../components/TopAboutSection.vue';
    import ContactSection from '../components/ContactSection.vue';
    import FirstFooter from '../components/FirstFooter.vue';
    import SecondFooter from '../components/SecondFooter.vue';


    export default {
        name:'ContactPage',
        components:{
            FirstToolbar,
            SecondToolbar,
            TopAboutSection,
            ContactSection,
            FirstFooter,
            SecondFooter,
            
        }
    }
</script>

<style>
    
</style>