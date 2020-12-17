<template>
  <section
    id="aboutme"
    class="container mx-auto relative pb-48 pt-32"
  >
    <div class="grid grid-cols-12 ">
      <h2 class="text-9xl text-right col-start-6 col-end-13 text-white">about me.</h2>
    </div>
    <div class="flex justify-center space-x-16 items-center mt-16">
      <div>
        <img
          src="../assets/img/profil.png"
          alt=""
        >
      </div>
      <div class="text-white">
        <h3 class="text-2xl tracking-widest">martin molcrette</h3>
        <h4 class="tracking-widest">UX / UI Designer</h4>
        <div class="flex space-x-6 mt-8">
          <a
            class="h-10 w-10 bg-white flex justify-center items-center rounded-full"
            href="https://dribbble.com/mart1"
          >
            <font-awesome-icon :icon="['fab', 'dribbble']" />
          </a>
          <a
            class="h-10 w-10 bg-white flex justify-center items-center rounded-full"
            href=""
          >
            <font-awesome-icon :icon="['fab', 'behance']" />
          </a>
          <a
            class="h-10 w-10 bg-white flex justify-center items-center rounded-full"
            href=""
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            class="h-10 w-10 bg-white flex justify-center items-center rounded-full"
            href=""
          >
            <font-awesome-icon :icon="['fab', 'twitch']" />
          </a>
        </div>
      </div>
    </div>
    <section
      class="flex align-center justify-center pt-40"
      id="contactme"
    >
      <div class="w-auto">
        <h2 class="text-4xl text-white tracking-widest ">Interested to work with me?</h2>
        <div class="flex justify-center">
          <a
            class="uppercase mt-10 flex justify-center py-4 rounded-full bg-white px-20"
            :href="'https://google.fr'"
            target="_blank"
          >Contact me →</a>
        </div>

      </div>
    </section>
  </section>

</template>