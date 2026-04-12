<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
  import Icon from "@iconify/svelte";
  import { socialLinks } from "$lib/data/socialLinks";

  const BIRTH_DATE = new Date("2009-08-10T00:00:00");
  const PRECISION = 8;

  let now = $state(Date.now());

  $effect(() => {
    const interval = setInterval(() => {
      now = Date.now();
    }, 100);
    return () => clearInterval(interval);
  });

  const age = $derived(
    ((now - BIRTH_DATE.getTime()) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(
      PRECISION,
    ),
  );
</script>

<Section id="o-mne">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 items-start">
    <article
      class="sm:col-span-2 lg:col-span-4 bg-white p-6 border border-gray-200 rounded-3xl"
    >
      <h2 class="text-black mb-3">Kdo jsem?</h2>
      <p class="text-gray-700 leading-relaxed">
        Jmenuji se Ondřej Klíma, ale v online světě si říkám Klimondra. Studuji
        IT a programování na Střední škole aplikované kybernetiky v Hradci
        Králové. Počítače mě baví už od dětství. Kolem třinácti let jsem zkoušel
        tvořit první weby v HTML a CSS a postupně u toho experimentoval i s
        Pythonem nebo C#. Dnes se v programování aktivně rozvíjím a zkoumám
        zajímavé věci napříč Frontend i Backend vývojem. Nejde ale jen o školu –
        rád se posouvám i ve volném čase, protože mě baví objevovat nové
        technologie a hledat efektivní řešení.
      </p>
    </article>

    <article
      class="sm:col-span-2 lg:col-span-4 col-start-1 bg-white p-6 border border-gray-200 rounded-3xl flex flex-col gap-5"
    >
      <h3 class="text-xl font-semibold text-black">Najdete mě na sítích</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {#each socialLinks.filter((l) => l.showInAbout) as link}
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            class="group flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-xs transition-all duration-300"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 group-hover:text-azure-600 group-hover:border-azure-200 transition-all duration-300"
              >
                <Icon icon={link.iconId} class="w-5 h-5" />
              </div>
              <span class="font-medium text-gray-900">{link.platformName}</span>
            </div>
            <Icon 
              icon="lucide:arrow-up-right" 
              class="w-5 h-5 text-gray-400 group-hover:text-azure-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" 
            />
          </a>
        {/each}
      </div>
    </article>



    <div
      class="sm:col-span-2 lg:col-span-3 lg:row-span-2 lg:col-start-5 lg:row-start-1 flex flex-col rounded-3xl border border-gray-200 overflow-hidden h-full"
    >
      <div class="bg-white px-4 py-3">
        <span class="text-gray-500 text-sm font-mono">GET /api/v1/me</span>
      </div>
      <div
        class="flex-1 p-6 font-mono text-sm leading-relaxed text-white bg-azure-950"
      >
        <pre>
&lbrace;
  <span class="text-yellow-400">"name"</span>: <span class="text-green-400"
            >"Ondřej Klíma"</span
          >,
  <span class="text-yellow-400">"nickname"</span>: <span class="text-green-400"
            >"Klimondra"</span
          >,
  <span class="text-yellow-400">"age"</span>: <span class="text-blue-400"
            >{age}</span
          >,
  <span class="text-yellow-400">"skills"</span>: [
    <span class="text-green-400">"UI/UX design"</span>,
    <span class="text-green-400">"Clean Code"</span>,
    <span class="text-green-400">"Animations"</span>
  ]
&rbrace;
</pre>
      </div>
    </div>
  </div>
</Section>
