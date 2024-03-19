<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import { useQuery } from "@sveltestack/svelte-query";
  import { link, location } from "svelte-spa-router";
  import Spinner from "./Spinner.svelte";
  import { yearFromEnd } from "../lib/functions";
  import type { RcloneData } from "../lib/interfaces";

  export let rcloneData: RcloneData;

  const queryId = rcloneData.ID;
  const { noYear, yearOnly } = yearFromEnd(rcloneData.Name);
  let mediaType: string;
  let optional: string = "";

  if ($location === "/films") {
    mediaType = "movie";
    optional = `&year=${yearOnly}`;
  } else if ($location === "/shows") mediaType = "tv";
  else if ($location === "/games") mediaType = "games";

  const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=${$locale}&query=${noYear}${optional}`;

  const mediaQuery = useQuery(`${queryId}`, async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data.results[0];
      });
  });
</script>

{#if $mediaQuery.isLoading}
  <div class="card-holder group">
    <Spinner />
  </div>
{:else if $mediaQuery.data === undefined}
  <div class="card-holder group">
    undefined
    {rcloneData.Name}
  </div>
{:else}
  <a href="{$location}/{queryId}" use:link class="card-holder group">
    <img
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/{$mediaQuery.data
        .poster_path}"
      alt="poster"
      class="card-poster"
    />
    <div class="card-content-gradient">
      <div class="card-content-holder">
        <span class="card-content line-clamp-2 font-bold text-xl"
          >{$mediaQuery.data.name || $mediaQuery.data.title}</span
        >
        <p class="card-content line-clamp-3">
          {$mediaQuery.data.overview || $_("missingDesc")}
        </p>
      </div>
    </div>
  </a>
{/if}
