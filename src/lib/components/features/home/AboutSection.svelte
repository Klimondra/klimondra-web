<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";

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
      class="lg:col-span-2 col-start-1 bg-white p-6 border border-gray-200 rounded-3xl"
    >
      <h3 class="text-2xl text-black">Další kecy</h3>
    </article>

    <article
      class="lg:col-span-2 lg:col-start-3 bg-white p-6 border border-gray-200 rounded-3xl"
    >
      <h3 class="text-2xl text-black">Další kecy</h3>
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
