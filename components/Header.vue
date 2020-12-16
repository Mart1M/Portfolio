<template>
  <header class="container mx-auto z-10 grid md:grid-cols-12 gap-2 text-white mt-6 sticky top-6">
    <div class="col-start-1 col-span-2">
      <div class="background-blur rounded-full h-12 w-12 flex items-center justify-center">
        <a href="#body"><img
            src="../assets/img/logo.svg"
            alt=""
            srcset=""
          ></a>
      </div>
    </div>
    <div class="col-start-3 col-span-8 flex justify-center items-center">
      <nav class="menu flex px-10 rounded-full h-12">
        <ul class="flex flex-row space-x-10 py-3">
          <li><a href="#myworks">my works</a></li>
          <li><a href="#aboutme">about me</a></li>
          <li><a href="#contactme">contact me</a></li>
        </ul>
      </nav>
    </div>
    <div class="col-start-11 col-span-2 md:flex justify-end hidden">
      <div class="background-blur rounded-full flex space-x-6 items-center justify-center px-8">
        <a href="">
          <font-awesome-icon :icon="['fab', 'dribbble']" />
        </a>
        <a href="">
          <font-awesome-icon :icon="['fab', 'behance']" />
        </a>
      </div>
    </div>
  </header>
</template>