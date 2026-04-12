<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    variant?: "light" | "secondary" | "outline" | "accent";
    size?: "sm" | "lg";
    href?: string;
  }

  let { children, variant = "light", size = "lg", href }: Props = $props();

  const variantClasses = {
    light: "bg-white text-azure-950 hover:bg-neutral-100",
    secondary:
      "bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white/60",
    outline:
      "bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-azure-950",
    accent: "bg-azure-500 text-white hover:bg-azure-600",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-base gap-1.5",
    lg: "px-6 py-2.5 text-lg gap-2",
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-out active:scale-95";
</script>

{#if href}
  <a {href} class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]}">
    {@render children()}
  </a>
{:else}
  <button class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]}">
    {@render children()}
  </button>
{/if}
