<script lang="ts">
  let { children, class: className = "", id = "" } = $props();
</script>

<section {id} class={`w-full max-w-7xl mx-auto px-4 md:px-6 ${className}`}>
  {#if children}
    {@render children()}
  {/if}
</section>
