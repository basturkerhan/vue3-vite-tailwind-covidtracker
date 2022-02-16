<template>
  <div class="bg-dark w-full h-full mb-8">
    <app-header />
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  created() {
    this.$store.dispatch("getCountries");
  },
  components: {
    Footer,
  },
};
</script>

