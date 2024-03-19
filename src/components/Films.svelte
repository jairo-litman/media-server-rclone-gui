<script lang='ts'>
import { useQuery } from '@sveltestack/svelte-query'
import { rcloneListQuery } from '../lib/functions';
import Card from "./Card.svelte";
import Spinner from "./Spinner.svelte";

const filmsList = useQuery('films-list', () => rcloneListQuery('Filmes'))

</script>

{#if $filmsList.isLoading}
<div class="h-full w-full fixed overflow-hidden">
  <Spinner />
</div>
{:else}
<div class="grid grid-cols-5 gap-y-10 w-full h-full justify-items-center items-center p-5">
  {#each $filmsList.data.list as s}
    <Card rcloneData={s} />
  {/each}
</div>
{/if}