<template>
  <div class='container mx-auto px-4 relative'>
    <div v-if="error">{{ error }}</div>
    <ul
      v-else
      class="grid grid-cols-3 gap-10 mt-32"
    >
      <li
        v-for="projet in projets"
        :key="projet.id"
      >
        <div class="bg-white flex flex-col rounded-t-3xl rounded-b-2xl">
          <img
            v-if="projet.Image"
            :src="'https://strapi-backend-mart1.herokuapp.com'+projet.Image[0].url"
            class="rounded-t-2xl"
            alt
            srcset
          />
          <div class="px-8 py-6 flex flex-col">

            <div class="px-8 py-6 flex flex-col">
              <h3 class="text-2xl">{{ projet.Titre }}</h3>
              <span class="text-gray-400">{{ projet.Tag }}</span>
            </div>
            <a
              class="border-gray-900 uppercase border-2 mt-10 flex justify-center py-4 rounded-full"
              :href="projet.Lien"
              target="_blank"
            >View project →</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
axios
  .get("https://strapi-backend-mart1.herokuapp.com/projets")
  .then(response => {
    console.log(response);
  });

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