<script lang="ts">
  import Icon from "@iconify/svelte";
  import logoBlack from "$lib/assets/branding/Logomark-black.svg";
  import logoWhite from "$lib/assets/branding/Logomark-white.svg";
  import { navigationItems } from "$lib/data/navigationItems";

  const contactLinks = [
    {
      label: "Email",
      cta: "Napište mi",
      href: "mailto:hello@example.com",
      icon: "lucide:mail",
    },
    {
      label: "LinkedIn",
      cta: "Spojme se",
      href: "https://example.com/linkedin",
      icon: "simple-icons:linkedin",
    },
    {
      label: "GitHub",
      cta: "Mrkněte na kód",
      href: "https://example.com/github",
      icon: "simple-icons:github",
    },
    {
      label: "Instagram",
      cta: "Sledujte mě",
      href: "https://example.com/instagram",
      icon: "simple-icons:instagram",
    },
    {
      label: "Discord",
      cta: "Napište na Discord",
      href: "https://example.com/discord",
      icon: "simple-icons:discord",
    },
  ] as const;
</script>

<footer class="w-full">
  <div
    class="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 flex flex-col gap-10"
  >
    <section class="rounded-3xl overflow-hidden">
      <div
        class="relative rounded-3xl overflow-hidden bg-linear-to-br from-azure-950 via-azure-900 to-azure-800"
      >
        <div
          class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-azure-800 blur-2xl opacity-90 pointer-events-none"
        ></div>
        <div class="relative p-6 md:p-10">
          <div
            class="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          >
            <div class="flex flex-col gap-4">
              <a href="/" class="inline-flex items-center gap-3 text-white">
                <img src={logoWhite} alt="Klimondra" class="h-6" />
                <span class="text-xl font-semibold tracking-tight"
                  >Klimondra</span
                >
              </a>
              <p class="text-sm text-white/75 max-w-md leading-relaxed">
                Pojďme společně postavit rychlý, moderní a udržovatelný web.
              </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div class="flex flex-col gap-3">
                <div class="text-sm font-semibold text-white">Navigace</div>
                <nav class="flex flex-col gap-2">
                  {#each navigationItems as item (item.href)}
                    <a
                      href={item.href}
                      class="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  {/each}
                </nav>
              </div>

              <div class="flex flex-col gap-3 col-span-2 sm:col-span-2">
                <div class="text-sm font-semibold text-white">Kontakt</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {#each contactLinks as link (link.label)}
                    <a
                      href={link.href}
                      target={link.href.startsWith("http")
                        ? "_blank"
                        : undefined}
                      rel={link.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined}
                      aria-label={link.label}
                      class="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition-all"
                    >
                      <span class="flex items-center gap-2 min-w-0">
                        <Icon
                          icon={link.icon}
                          class="w-4.5 h-4.5 text-white/80 group-hover:text-white"
                        />
                        <span class="text-sm text-white font-medium truncate"
                          >{link.label}</span
                        >
                      </span>
                      <span
                        class="text-xs text-white/65 group-hover:text-white transition-colors whitespace-nowrap"
                      >
                        {link.cta}
                      </span>
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <div class="text-xs text-white/75">
              Vytvořil Ondřej Klíma v roce 2026. Všechna práva vyhrazena.
            </div>
            <div class="text-xs text-white/60">
              Web nevyužívá žádné trackovací cookies ani nic podobného.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</footer>
