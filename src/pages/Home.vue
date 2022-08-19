<template>
    <FirstToolbar />
    <SecondToolbar />
    <TopSection />
    <InformationSection />
    <AboutSection />
    <CategoriesSection />
    <ProductsSection />
    <!-- <ClientsSection/> -->
    <footer class="ftco-footer">
        <FirstFooter />
        <SecondFooter />
    </footer>

</template>

<script>
    import FirstToolbar from './components/FirstToolbar.vue';
    import SecondToolbar from './components/SecondToolbar.vue';
    import TopSection from './components/TopSection.vue';
    import InformationSection from './components/InformationSection.vue';
    import AboutSection from './components/AboutSection.vue';
    import CategoriesSection from './components/CategoriesSection.vue';
    import ProductsSection from './components/ProductsSection.vue';
    import FirstFooter from './components/FirstFooter.vue';
    import SecondFooter from './components/SecondFooter.vue';


    export default {
        name: 'App',
        components: {
            FirstToolbar,
            SecondToolbar,
            TopSection,
            InformationSection,
            AboutSection,
            CategoriesSection,
            ProductsSection,
            FirstFooter,
            SecondFooter
        }
    }
</script>

<style>
</style>
