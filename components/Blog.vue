<script>
import axios from "axios";

// axios
//   .get("https://strapi-298820.ew.r.appspot.com/projets")
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
        "https://strapi-298820.ew.r.appspot.com/projets?_sort=id:DESC"
      );
      this.projets = response.data;
    } catch (error) {
      this.error = error;
    }
  }
};
</script>
<template>
  <div
    class='container mx-auto relative'
    id="myworks"
  >
    <div class="grid grid-cols-12 ">
      <h2 class="text-9xl col-start-1 col-end-12 text-white">my works.</h2>
    </div>

    <div v-if="error">{{ error }}</div>
    <ul
      v-else
      class="grid grid-cols-12 gap-8 mt-32 mx-32"
    >
      <li
        v-for="projet in projets"
        :key="projet.id"
        class="cards-project col-span-4"
      >
        <div class="bg-white flex flex-col rounded-t-3xl rounded-b-2xl">
          <img
            v-if="projet.Image"
            :src="projet.Image[0].formats.small.url"
            class="rounded-t-2xl"
            alt
            srcset
          />
          <div class="px-8 py-6 flex flex-col">

            <h3 class="text-2xl">{{ projet.Titre }}</h3>
            <span class="text-gray-400">{{ projet.Tag }}</span>
            <a
              class="uppercase mt-10 flex justify-center py-4 rounded-full"
              :href="projet.Lien"
              target="_blank"
            >View project →</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

