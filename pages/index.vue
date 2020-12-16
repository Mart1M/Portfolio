<script>
import axios from "axios";

// axios
//   .get("https://strapi-backend-mart1.herokuapp.com/projets")
//   .then(response => {
//     console.log(response);
//   });

export default {
  name: "projects",
  data() {
    return {
      projets: [],
      error: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://strapi-backend-mart1.herokuapp.com/projets"
      );
      this.projets = response.data;
    } catch (error) {
      this.error = error;
    }
  }
};
</script>
<template>
  <div>
    <div class="left-1/2 -translate-x-1/2 transform border-r border-l border-dotted border-opacity-10 divide-opacity-10 divide-x divide-dotted divide-white container mx-auto border-white grid top-0 bottom-0 h-screen grid-cols-12 fixed z-0">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Header />
    <Hero />
    <section class="mt-80 main">
      <img
        class="w-screen wave"
        src="../assets/img/Wave1.svg"
        alt=""
        srcset=""
      >
      <section class="background-dark">
        <Blog />
      </section>
      <section class="background-dark">
        <About />
      </section>
    </section>
  </div>

</template>





