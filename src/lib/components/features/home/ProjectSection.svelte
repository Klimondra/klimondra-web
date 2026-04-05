<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import SectionTitle from "$lib/components/ui/SectionTitle.svelte";
  import { projects } from "$lib/data/projects";
  import { technologies } from "$lib/data/technologies";
  import Icon from "@iconify/svelte";

  let activeIndex = $state(0);

  function nextProject() {
    activeIndex = (activeIndex + 1) % projects.length;
  }

  function prevProject() {
    activeIndex = (activeIndex - 1 + projects.length) % projects.length;
  }

  function selectProject(index: number) {
    activeIndex = index;
  }

  function getTechIcon(techName: string): string {
    const tech = technologies.find((t) => t.name === techName);
    return tech?.icon ?? "";
  }

  const activeProject = $derived(projects[activeIndex]);
</script>

<Section class="flex flex-col gap-6 lg:gap-10">
  <!-- Header -->
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
    <SectionTitle title="Vybrané projekty" />
    <div class="flex gap-2">
      <button
        onclick={prevProject}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-azure-400 hover:bg-azure-50 transition-all"
        aria-label="Předchozí projekt"
      >
        <Icon icon="lucide:chevron-left" class="w-5 h-5 text-gray-600" />
      </button>
      <button
        onclick={nextProject}
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-azure-400 hover:bg-azure-50 transition-all"
        aria-label="Další projekt"
      >
        <Icon icon="lucide:chevron-right" class="w-5 h-5 text-gray-600" />
      </button>
    </div>
  </div>

  <!-- Mobile: Project Selector (horizontal scroll) -->
  <div class="lg:hidden -mx-4 px-4 overflow-x-auto pb-2">
    <div class="flex gap-3 min-w-max">
      {#each projects as project, index (index)}
        <button
          onclick={() => selectProject(index)}
          class="flex-shrink-0 text-left p-3 rounded-xl transition-all duration-200 ring-1 w-64 {index ===
          activeIndex
            ? 'bg-white ring-azure-500 shadow-md'
            : 'bg-white/60 ring-gray-200 hover:bg-white hover:ring-gray-300'}"
          aria-current={index === activeIndex ? "true" : "false"}
        >
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h4
                class="font-semibold text-sm leading-tight {index ===
                activeIndex
                  ? 'text-azure-700'
                  : 'text-gray-900'}"
              >
                {project.name}
              </h4>
              <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-snug">
                {project.description}
              </p>
            </div>
            <Icon
              icon="lucide:arrow-up-right"
              class="w-4 h-4 mt-0.5 shrink-0 {index === activeIndex
                ? 'text-azure-600'
                : 'text-gray-400'}"
            />
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Main Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
    <!-- Left Column: Image + Details (always together) -->
    <div class="lg:col-span-8 flex flex-col gap-6">
      <!-- Image -->
      <div
        class="rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 bg-white"
      >
        <img
          src={activeProject.thumbnailImage}
          alt={activeProject.name}
          class="w-full object-cover aspect-video"
          loading="lazy"
        />
      </div>

      <!-- Project Details -->
      <div class="flex flex-col gap-4">
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

        <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          {activeProject.description}
        </p>

        <div class="flex sm:justify-start">
          <a
            href={`/projects/${activeProject.slug}`}
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-azure-500 text-white hover:bg-azure-600 transition-all shadow-sm hover:shadow"
          >
            Zjistit více
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <!-- Right Column: Project List (desktop only) -->
    <div class="hidden lg:block lg:col-span-4">
      <div class="flex flex-col gap-3 sticky top-4">
        {#each projects as project, index (index)}
          <button
            onclick={() => selectProject(index)}
            class="text-left p-4 rounded-xl transition-all duration-200 ring-1 {index ===
            activeIndex
              ? 'bg-white ring-azure-500 shadow-sm'
              : 'bg-gray-50/80 ring-gray-200 hover:bg-white hover:ring-gray-300'}"
            aria-current={index === activeIndex ? "true" : "false"}
          >
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <h4
                  class="font-semibold text-base leading-tight {index ===
                  activeIndex
                    ? 'text-azure-700'
                    : 'text-gray-900'}"
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
                icon="lucide:arrow-up-right"
                class="w-4 h-4 mt-0.5 shrink-0 {index === activeIndex
                  ? 'text-azure-600'
                  : 'text-gray-400'}"
              />
            </div>
          </button>
        {/each}
      </div>
    </div>
  </div>
</Section>
