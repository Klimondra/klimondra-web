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

  function getTechColor(techName: string): string {
    const tech = technologies.find((t) => t.name === techName);
    return tech?.color ?? "#666";
  }

  function getTechIcon(techName: string): string {
    const tech = technologies.find((t) => t.name === techName);
    return tech?.icon ?? "";
  }

  const activeProject = $derived(projects[activeIndex]);
</script>

<Section class="flex flex-col gap-8">
  <div class="flex justify-between items-center">
    <SectionTitle title="Vybrané projekty" />
    <div class="flex gap-2">
      <button
        onclick={prevProject}
        class="w-10 h-10 rounded-full border border-azure-300 flex items-center justify-center hover:bg-azure-50 transition-colors"
        aria-label="Předchozí projekt"
      >
        <svg
          class="w-5 h-5 text-azure-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onclick={nextProject}
        class="w-10 h-10 rounded-full border border-azure-300 flex items-center justify-center hover:bg-azure-50 transition-colors"
        aria-label="Další projekt"
      >
        <svg
          class="w-5 h-5 text-azure-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
    <div
      class="lg:col-span-3 relative rounded-2xl overflow-hidden border border-neutral-200"
    >
      <img
        src={activeProject.thumbnailImage}
        alt={activeProject.name}
        class="w-full h-full object-cover aspect-video"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-transparent"
      ></div>
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <div class="flex gap-2 mb-3">
          {#each activeProject.technologies.slice(0, 3) as tech}
            <span
              class="px-3 py-1 rounded-full text-sm font-medium text-white flex flex-row gap-1.5 items-center bg-black/60"
            >
              <Icon icon={getTechIcon(tech)} class="w-4 h-4" />
              {tech}
            </span>
          {/each}
        </div>
        <h3 class="text-2xl font-bold text-white mb-1">{activeProject.name}</h3>
        <p class="text-neutral-100 text-sm">{activeProject.description}</p>
      </div>
    </div>

    <!-- Pravá strana - seznam projektů -->
    <div class="lg:col-span-2 flex flex-col gap-3">
      {#each projects as project, index}
        <button
          onclick={() => selectProject(index)}
          class="text-left p-4 rounded-xl transition-all duration-200 border-2 {index ===
          activeIndex
            ? 'bg-white border-azure-400 shadow-lg'
            : 'bg-azure-50/50 border-transparent hover:bg-azure-50'}"
        >
          <h4
            class="font-semibold mb-1 {index === activeIndex
              ? 'text-azure-600'
              : 'text-gray-800'}"
          >
            {project.name}
          </h4>
          <p class="text-sm text-gray-500 line-clamp-2">
            {project.description}
          </p>
        </button>
      {/each}
    </div>
  </div>
</Section>
