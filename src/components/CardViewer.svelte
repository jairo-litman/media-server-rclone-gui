<script lang="ts">
import { useQueryClient } from "@sveltestack/svelte-query";
import type { TMDBshow } from "../lib/interfaces";

const queryClient = useQueryClient()

interface Params {
  id: string;
}

export let params: Params

const tmdbShow: TMDBshow = queryClient.getQueryData([`${params.id}`])

const posterURL = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${tmdbShow.poster_path}`
const backdropURL = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${tmdbShow.backdrop_path}`

</script>

<img src={posterURL} alt="poster">
<div>{tmdbShow.name}</div>

<div class="fixed w-full h-2/3 -z-40 bg-neutral-700">
  <img class="relative left-1/4 h-full" src={backdropURL} alt="backdrop">
</div>
<div class="fixed bg-neutral-500 w-full h-full bottom-0 -z-50"></div>

<!-- <div class="fixed w-full h-2/3 -z-40 bg-neutral-700">
  <div class="relative left-1/4 w-full h-full bg- bg-gradient-to-t from-red-700 to-blue-600 bg-[url({backdropURL})]">
    <div class="h-full"></div>
  </div>
</div>
<div class="fixed bg-neutral-500 w-full h-full bottom-0 -z-50"></div> -->
