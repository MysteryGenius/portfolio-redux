<template>
  <article>
    <h3 class="text-6xl font-bold">Worry Me</h3>
    <video
      autoplay
      loop
      muted
      playsinline
      class="mt-4 shadow shadow-cyan-500 rounded-xl"
    >
      <source src="/projects/worryme.webm" type="video/webm" />
      <source src="/projects/worryme.mp4" type="video/mp4" />
    </video>
    <p class="mt-6">
      Worry Me was a project I did to find out what worries my friends, after I
      read an article on compassion fatigue. The application is built using Vue
      and TailwindCSS.
    </p>
    <p class="mt-6 space-x-2">
      <span
        class="font-bold text-xs text-green-300 bg-green-700 rounded-full px-4 py-1"
      >
        VueJS
      </span>
      <span
        class="font-bold text-xs text-yellow-300 bg-yellow-700 rounded-full px-4 py-1"
      >
        Firebase
      </span>
      <span
        class="font-bold text-xs text-teal-300 bg-teal-700 rounded-full px-4 py-1"
      >
        TailwindCSS
      </span>
    </p>
    <a
      href="https://worry-me.web.app/"
      target="_blank"
      class="block mt-10 text-xl font-bold underline"
    >
      Visit the Project
    </a>
  </article>
</template>
