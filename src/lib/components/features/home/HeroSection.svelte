<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import Section from "$lib/components/ui/Section.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import { projects } from "$lib/data/projects";

  gsap.registerPlugin(ScrollTrigger);

  const heroProjects = projects.filter((project) => project.visibleInHero);

  // Appear animation
  let sectionContainer: HTMLDivElement;
  let photosContainer: HTMLDivElement;

  onMount(() => {
    let ctx = gsap.context(() => {
      // Full section animation
      gsap.fromTo(
        sectionContainer,
        {
          autoAlpha: 0,
          y: 100,
          filter: "blur(12px)",
        },
        {
          scrollTrigger: {
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
          duration: 1.5,
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          ease: "power3.out",
        },
      );

      // Animate hero images with blur effect
      gsap.from(".animated-hero-image", {
        scrollTrigger: {
          trigger: photosContainer,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        delay: 1.5,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        stagger: 0.2,
        filter: "blur(8px)",
      });
    });

    return () => ctx.revert();
  });
</script>

<Section id="uvod" class="h-screen pt-12 pb-20">
  <div
    bind:this={sectionContainer}
    class="w-full h-full relative p-8 flex flex-col justify-center items-center gap-6
            bg-linear-to-br from-azure-950 via-azure-900 to-azure-800 rounded-3xl overflow-hidden invisible"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-azure-800 blur-2xl -z-10"
    ></div>
    <div class="flex flex-col gap-3 z-0">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center"
      >
        Tvořím digitální řešení
      </h1>
      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-neutral-100 tracking-wide text-center"
      >
        Neustále se učím a zkouším nové věci v programování
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 mt-3 z-0">
      <Button href="/o-mne" variant="light" size="lg">Zjistit více</Button>
      <Button href="/kontakt" variant="outline" size="lg">Spojit se</Button>
    </div>
    <div
      bind:this={photosContainer}
      class="absolute -bottom-8 w-full h-36 hidden md:flex items-center justify-center gap-8"
    >
      {#each heroProjects as project, index (index)}
        <img
          src={project.thumbnailImage.source}
          alt={project.thumbnailImage.alt}
          class={"animated-hero-image h-36 rounded-sm " +
            (index % 2 === 0 ? "-rotate-3" : "rotate-3")}
        />
      {/each}
    </div>
  </div>
</Section>
