<script lang="ts">
  import { _ } from "svelte-i18n";
  import Router from "svelte-spa-router";
  import routes from './lib/routes'
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import Navbar from "./components/Navbar.svelte";

  const queryClient = new QueryClient()
</script>

<Navbar />
<QueryClientProvider client={queryClient}>
  <div class="pl-16 h-full w-full flex -z-50">
    <Router {routes}/>
  </div>  
</QueryClientProvider>

