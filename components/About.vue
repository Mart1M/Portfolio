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
          src=""
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
  </section>
</template>