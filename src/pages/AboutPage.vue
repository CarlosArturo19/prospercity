<template>
  <FirstToolbar />
  <SecondToolbar />
  <TopAboutSection title="Nosotros" />
  <AboutSection class="mb-4" />
  <footer class="ftco-footer">
    <FirstFooter />
    <SecondFooter />
  </footer>

</template>

<script>
  import FirstToolbar from '../components/FirstToolbar.vue';
  import SecondToolbar from '../components/SecondToolbar.vue';
  import TopAboutSection from '../components/TopAboutSection.vue';
  import InformationSection from '../components/InformationSection.vue';
  import AboutSection from '../components/AboutSection.vue';
  import CategoriesSection from '../components/CategoriesSection.vue';
  import FirstFooter from '../components/FirstFooter.vue';
  import SecondFooter from '../components/SecondFooter.vue';

  export default {
    name: 'AboutPage',
    components: {
      FirstToolbar,
      SecondToolbar,
      TopAboutSection,
      InformationSection,
      AboutSection,
      CategoriesSection,
      FirstFooter,
      SecondFooter
    }
  }
</script>

<style>
</style>
