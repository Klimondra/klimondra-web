<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    variant?: "light" | "secondary" | "outline" | "accent";
    size?: "sm" | "md" | "lg";
    href?: string;
    class?: string;
    [key: string]: any;
  }

  let {
    children,
    variant = "light",
    size = "md",
    href,
    class: className = "",
    ...rest
  }: Props = $props();

  const variantClasses = {
    light:
      "bg-white text-azure-950 hover:bg-gray-50 border border-gray-200/50 hover:border-gray-300 shadow-sm",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-sm",
    outline:
      "bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-azure-950 shadow-sm",
    accent:
      "bg-azure-600 text-white hover:bg-azure-700 border border-azure-500 shadow-sm shadow-azure-900/20",
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2 text-base gap-2",
    lg: "px-6 py-2.5 text-[1.05rem] gap-2",
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 ease-out active:scale-[0.98] group overflow-hidden relative";
</script>

{#if href}
  <a {href} class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}" {...rest}>
    {@render children()}
  </a>
{:else}
  <button class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}" {...rest}>
    {@render children()}
  </button>
{/if}
