<script lang="ts">
import { _, locale, locales } from "svelte-i18n";
import { Icon } from "@steeze-ui/svelte-icon";
import { Edit } from "@steeze-ui/remix-icons";

const settings = [
  {
    "name": 'films-path',
    "path": 'C:/Test/Test2/films',
  },
  {
    "name": 'shows-path',
    "path": 'C:/Test/Test2/shows',
  },
  {
    "name": 'games-path',
    "path": 'C:/Test/Test2/games'
  },
]

</script>


<div class="h-screen w-full">
  <div class="flex flex-col gap-y-5 p-16 bg-neutral-800 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-10/12 rounded-3xl drop-shadow-2xl overflow-hidden">
  {#each settings as i}
  	<div id={i.name} class="flex flex-col">
  	  <p class="text-3xl font-bold drop-shadow-lg">{$_(i.name)}</p>
      <hr class="my-3 shadow-sm shadow-black">
      <div class="flex flex-row h-7">
        <span class="bg-neutral-700 rounded-lg px-3 self-center h-full border-white border shadow-md shadow-black w-full">{i.path}</span>
        <button class="bg-neutral-100 rounded-lg h-max self-center w-10 py-1 ml-3 flex items-center border border-black shadow-md shadow-black"><Icon src={Edit} theme='solid' class='fill-neutral-700 h-5'/></button>
      </div>
  	</div>
  {/each}
    <div id="lang-selector" class="self-center pt-12 flex flex-col">
      <label for="language" class="text-3xl font-bold drop-shadow-lg">LANGUAGE</label>
      <select id="language" bind:value="{$locale}" class="text-black">
      {#each $locales as i}
        <option value="{i}">{i}</option>
      {/each}
      </select>
    </div>
  </div>
</div>

<style>
  :root {
    color: white;
  }
</style>
