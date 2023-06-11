<template>
  <article>
    <h3 class="text-6xl font-bold">A Land for All</h3>
    <video
      autoplay
      loop
      muted
      playsinline
      class="mt-4 shadow shadow-cyan-500 rounded-xl"
    >
      <source src="/projects/landforall.webm" type="video/webm" />
      <source src="/projects/landforall.mp4" type="video/mp4" />
    </video>
    <p class="mt-6">
      A land for all is a project by a ground up initiative to help the migrant
      workers in Singapore. The project was a challenge as the animation on
      scroll allows the information to be digested at the user's pace. The
      application is built using Vue, TailwindCSS and GSAP
    </p>
    <p class="mt-6 space-x-2">
      <span
        class="font-bold text-xs text-green-300 bg-green-700 rounded-full px-4 py-1"
      >
        VueJS
      </span>
      <span
        class="font-bold text-xs text-emerald-300 bg-emerald-700 rounded-full px-4 py-1"
      >
        GSAP
      </span>
      <span
        class="font-bold text-xs text-teal-300 bg-teal-700 rounded-full px-4 py-1"
      >
        TailwindCSS
      </span>
    </p>
    <a
      href="https://land-for-all-demo.web.app/"
      target="_blank"
      class="block mt-10 text-xl font-bold underline"
    >
      Visit the Project
    </a>
  </article>
</template>
