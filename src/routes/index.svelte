<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="main">
  <p>Testing</p>
</div>


<style>
  .main {
    @apply text-xl;
  }
  p {
    @apply text-red-500;
    @screen sm {
      @apply text-xs;
    }
  }
</style>