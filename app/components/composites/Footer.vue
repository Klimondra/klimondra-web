<script setup>

</script>

<template>
  <footer class="w-full p-6">
    <div
        class="w-full min-h-16 flex items-center justify-center p-4
          bg-black/10 dark:bg-white/10 rounded-2xl border-2 border-iris-500/10 transition-all duration-200
        "
    >
      <p class="font-main text-center text-base lg:text-xl text-neutral-700 dark:text-neutral-300 transition duration-200">
        {{ $t("composites.footer.madein") }} {{ new Date().getFullYear() }} | {{ $t("composites.footer.allrights") }} | {{ $t("composites.footer.nospy") }}
      </p>
    </div>
  </footer>
</template>