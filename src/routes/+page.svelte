<script lang="ts">
  import AboutSection from "$lib/components/features/home/AboutSection.svelte";
  import HeroSection from "$lib/components/features/home/HeroSection.svelte";
  import ProjectSection from "$lib/components/features/home/ProjectSection.svelte";
  import TechnologySlider from "$lib/components/features/home/TechnologySlider.svelte";
</script>

<main class="min-h-screen flex flex-col gap-20 lg:gap-28 pt-14">
  <HeroSection />
  <AboutSection />
  <TechnologySlider />
  <ProjectSection />
</main>
