<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/Button.svelte";
  import Section from "$lib/components/ui/Section.svelte";
</script>

<Section
  id="error"
  class="flex flex-col items-center justify-center min-h-screen text-center gap-6"
>
  <h1 class="text-5xl md:text-7xl font-bold text-azure-950 leading-none">
    {$page.status}
  </h1>

  <div class="flex flex-col gap-3 max-w-xl">
    <h2 class="text-2xl md:text-3xl font-medium text-black">
      {$page.status === 404 ? "Stránka nenalezena" : "Něco se pokazilo"}
    </h2>
    <p class="text-gray-600 md:text-lg">
      Tahle stránka tu bohužel není. Pravděpodobně se na ní teprve pracuje, nebo
      neležela tam, kde jsi hledal.
    </p>
  </div>

  <div class="mt-4">
    <Button href="/" variant="accent">Zpět na hlavní stránku</Button>
  </div>
</Section>
