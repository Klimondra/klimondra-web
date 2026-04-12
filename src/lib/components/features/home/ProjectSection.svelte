<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import SectionTitle from "$lib/components/ui/SectionTitle.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import { projects } from "$lib/data/projects";
  import { technologies } from "$lib/data/technologies";
  import Icon from "@iconify/svelte";

  let activeIndex = $state(0);
  let mobileCardsContainer: HTMLDivElement | undefined = $state();

  function scrollToActiveCard() {
    if (!mobileCardsContainer) return;
    const buttons = mobileCardsContainer.querySelectorAll("button");
    const activeButton = buttons[activeIndex];
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }

  function nextProject() {
    activeIndex = (activeIndex + 1) % projects.length;
    scrollToActiveCard();
  }

  function prevProject() {
    activeIndex = (activeIndex - 1 + projects.length) % projects.length;
    scrollToActiveCard();
  }

  function selectProject(index: number) {
    activeIndex = index;
    scrollToActiveCard();
  }

  function getTechIcon(techName: string): string {
    const tech = technologies.find((t) => t.name === techName);
    return tech?.icon ?? "";
  }

  const activeProject = $derived(projects[activeIndex]);
</script>

<Section class="flex flex-col gap-6 lg:gap-10">
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
    <SectionTitle title="Vybrané projekty" />
    <div class="flex gap-2">
      <button
        onclick={prevProject}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-azure-400 hover:bg-white transition-all"
        aria-label="Předchozí projekt"
      >
        <Icon icon="lucide:chevron-left" class="w-5 h-5 text-gray-600" />
      </button>
      <button
        onclick={nextProject}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-azure-400 hover:bg-white transition-all"
        aria-label="Další projekt"
      >
        <Icon icon="lucide:chevron-right" class="w-5 h-5 text-gray-600" />
      </button>
    </div>
  </div>

  <div
    bind:this={mobileCardsContainer}
    class="lg:hidden -mx-4 px-4 overflow-x-auto pb-2 pt-1 scroll-smooth"
  >
    <div class="flex gap-3 min-w-max">
      {#each projects as project, index (index)}
        <button
          onclick={() => selectProject(index)}
          class="shrink-0 text-left p-3 rounded-xl transition-all duration-300 ring-1 w-64 group {index ===
          activeIndex
            ? 'bg-white ring-azure-500 shadow-md'
            : 'ring-transparent hover:bg-white hover:ring-gray-300'}"
          aria-current={index === activeIndex ? "true" : "false"}
        >
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h4
                class="font-semibold text-sm leading-tight transition-colors duration-300 {index ===
                activeIndex
                  ? 'text-azure-700'
                  : 'text-gray-900 group-hover:text-azure-700'}"
              >
                {project.name}
              </h4>
              <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-snug">
                {project.description}
              </p>
            </div>
            <Icon
              icon="lucide:arrow-right"
              class="w-4 h-4 mt-0.5 shrink-0 transition-all duration-300 {index === activeIndex
                ? 'text-azure-600 translate-x-0.5'
                : 'text-gray-400 group-hover:text-azure-600 group-hover:translate-x-0.5'}"
            />
          </div>
        </button>
      {/each}
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
    <div class="lg:col-span-8 flex flex-col gap-6">
      <div
        class="rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 bg-white"
      >
        <img
          src={activeProject.thumbnailImage.source}
          alt={activeProject.thumbnailImage.alt}
          class="w-full object-cover aspect-video"
          loading="lazy"
        />
      </div>

      <div
        class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"
      >
        <div class="flex flex-col gap-4 flex-1">
          <h3
            class="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight"
          >
            {activeProject.name}
          </h3>

          <div class="flex flex-wrap gap-2">
            {#each activeProject.technologies.slice(0, 4) as tech, i (tech)}
              <span
                class="px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1.5 bg-gray-100/80"
              >
                <Icon
                  icon={getTechIcon(tech)}
                  class="w-3.5 h-3.5 text-gray-600"
                />
                {tech}
              </span>
            {/each}
          </div>

          <p
            class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl"
          >
            {activeProject.description}
          </p>
        </div>

        <div class="hidden lg:block shrink-0">
          <Button
            href={`/projects/${activeProject.slug}`}
            variant="accent"
            size="sm"
          >
            Zjistit více
            <Icon icon="lucide:arrow-right" class="w-5 h-5" />
          </Button>
        </div>

        <div class="lg:hidden mt-2">
          <Button
            href={`/projects/${activeProject.slug}`}
            variant="accent"
            size="sm"
          >
            Zjistit více
            <Icon icon="lucide:arrow-right" class="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:col-span-4">
      <div class="flex flex-col gap-3 sticky top-18">
        {#each projects as project, index (index)}
          <button
            onclick={() => selectProject(index)}
            class="text-left p-4 rounded-xl transition-all duration-300 ring-1 group {index ===
            activeIndex
              ? 'bg-white ring-azure-500 shadow-sm'
              : 'ring-transparent hover:bg-white hover:ring-gray-300'}"
            aria-current={index === activeIndex ? "true" : "false"}
          >
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0 flex-1">
                <h4
                  class="font-semibold text-base leading-tight transition-colors duration-300 {index ===
                  activeIndex
                    ? 'text-azure-700'
                    : 'text-gray-900 group-hover:text-azure-700'}"
                >
                  {project.name}
                </h4>
                <p
                  class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-snug"
                >
                  {project.description}
                </p>
              </div>
              <Icon
                icon="lucide:arrow-right"
                class="w-5 h-5 shrink-0 transition-all duration-300 {index === activeIndex
                  ? 'text-azure-600 translate-x-1'
                  : 'text-gray-300 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-azure-500'}"
              />
            </div>
          </button>
        {/each}
        <a
          href="/projects"
          class="text-left p-4 rounded-xl transition-all duration-300 ring-1 ring-dashed ring-gray-300 hover:ring-azure-400 hover:bg-azure-50/50 group"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <h4
                class="font-semibold text-base leading-tight text-gray-900 transition-colors duration-300 group-hover:text-azure-700"
              >
                Více projektů
              </h4>
              <p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-snug">
                Podívejte se na všechny projekty co jsem vytvářel.
              </p>
            </div>
            <Icon
              icon="lucide:arrow-right"
              class="w-5 h-5 mt-0.5 shrink-0 text-gray-400 transition-all duration-300 group-hover:text-azure-600 group-hover:translate-x-1"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</Section>
