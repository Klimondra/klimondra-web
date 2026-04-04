<script lang="ts">
  interface Props {
    title: string;
    subtitle?: string;
  }

  let { title, subtitle }: Props = $props();
</script>

<div class="section-title">
  <h2 class="text-3xl font-semibold text-black mb-3 leading-0">{title}</h2>
  {#if subtitle}
    <p class="text-lg text-neutral-600 translate-x-0.75">{subtitle}</p>
  {/if}
</div>
