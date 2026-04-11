<script lang="ts">
  import Section from "$lib/components/ui/Section.svelte";
</script>

<Section id="o-mne">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 items-start">
    <article
      class="sm:col-span-2 lg:col-span-4 bg-white p-6 border border-gray-200 rounded-3xl"
    >
      <h2 class="text-black mb-3">Nějaký kecy</h2>
      <p class="text-gray-700 leading-relaxed">
        What do you mean? You'd crucify your king? We have no king but Caesar
        He's done no wrong, no, not the slightest thing We have no king but
        Caesar, crucify him Well, this new respect for Caesar 'Til now this has
        been noticeably lacking Who is this Jesus? Why is he different? You Jews
        produce Messiahs by the sack full. We need him crucified It's all you
        have to do. We need him crucified It's all you have to do
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
      class="sm:col-span-2 lg:col-span-3 lg:row-span-2 lg:col-start-5 lg:row-start-1 flex flex-col rounded-3xl border border-gray-200 overflow-hidden"
    >
      <div class="bg-white px-4 py-3">
        <span class="text-gray-500 text-sm font-mono">GET /api/v1/me</span>
      </div>
      <div
        class="flex-1 p-6 font-mono text-sm leading-relaxed text-white bg-azure-950"
      >
        <pre>
&lbrace;
  <span class="text-yellow-400">"status"</span>: <span class="text-blue-400"
            >200</span
          >,
  <span class="text-yellow-400">"role"</span>: <span class="text-green-400"
            >"Fullstack Dev"</span
          >,
  <span class="text-yellow-400">"skills"</span>: [
    <span class="text-green-400">"UI/UX"</span>,
    <span class="text-green-400">"Clean Code"</span>,
    <span class="text-green-400">"Animations"</span>
  ],
  <span class="text-yellow-400">"age"</span>: <span class="text-blue-400"
            >16</span
          >,
  <span class="text-yellow-400">"hireable"</span>: <span class="text-pink-400"
            >true</span
          >
&rbrace;
</pre>
      </div>
    </div>
  </div>
</Section>
