<template>
  <div>
    <div class="mx-auto mt-10">
      <h1 class="text-2xl md:text-8xl text-left font-bold leading-tight">
        I brew
        <span
          class="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-transparent bg-clip-text"
        >
          beautiful
        </span>
        software fueled by oolong tea.
      </h1>
      <p class="mt-6 text-stone-300">previously in Shopee, Pace and more</p>
    </div>

    <img
      src="/teacup.png"
      alt="Tea Cup"
      class="rotate-0 hover:-rotate-6 transform transition duration-500 ease-in-out mx-auto"
    />

    <section id="projects" class="mt-20 md:mt-40 column-layout">
      <ProjectCard
        title="A Land for All"
        image="/projects/landforall.jpeg"
        link="/projects/landforall"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />
      <ProjectCard
        title="Code Clicker"
        image="/projects/codeclicker.jpeg"
        link="/projects/codeclicker"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />

      <ProjectCard
        title="Oolong"
        image="/projects/oolong.jpeg"
        link="/projects/oolong"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />
      <ProjectCard
        title="No Shade Just Colour"
        image="/projects/noshade.jpeg"
        link="/projects/noshade"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />
      <ProjectCard
        title="Glance.SG"
        image="/projects/glance.jpeg"
        link="/projects/glance"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />

      <ProjectCard
        title="Worry Me Project"
        image="/projects/worryme.jpeg"
        link="/projects/worryme"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />
      <ProjectCard
        title="syte."
        image="/projects/syte.jpeg"
        link="/projects/syte"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      />
    </section>
  </div>
</template>
<style scoped>
.column-layout {
  column-count: 1;
  column-gap: 1em;
}
@media (min-width: 768px) {
  .column-layout {
    column-count: 3;
  }
}
.column-layout > * {
  break-inside: avoid;
  margin-bottom: 1em;
}
</style>
