<template>
  <article>
    <h3 class="text-6xl font-bold">Code Clicker</h3>
    <video
      autoplay
      loop
      muted
      playsinline
      class="mt-4 shadow shadow-cyan-500 rounded-xl"
    >
      <source src="/projects/codeclicker.webm" type="video/webm" />
      <source src="/projects/codeclicker.mp4" type="video/mp4" />
    </video>
    <p class="mt-6">
      Code Clicker is a game I created as a way to learn VueJS. The game is
      simple and modeled after cookie clicker. The game progressively allows you
      hire more developers and the design of the game also improves over time as
      it simulates the app being built The game is built using Vue and
      TailwindCSS.
    </p>
    <p class="mt-6 space-x-2">
      <span
        class="font-bold text-xs text-green-300 bg-green-700 rounded-full px-4 py-1"
      >
        VueJS
      </span>
      <span
        class="font-bold text-xs text-teal-300 bg-teal-700 rounded-full px-4 py-1"
      >
        TailwindCSS
      </span>
    </p>
    <a
      href="https://codeclickergame.web.app/"
      target="_blank"
      class="block mt-10 text-xl font-bold underline"
    >
      Play the game?
    </a>
  </article>
</template>
