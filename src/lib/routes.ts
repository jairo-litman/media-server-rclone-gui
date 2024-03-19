import CardViewer from "../components/CardViewer.svelte";
import Films from "../components/Films.svelte";
import Games from "../components/Games.svelte";
import Home from "../components/Home.svelte";
import NotFound from "../components/NotFound.svelte";
import Settings from "../components/Settings.svelte";
import Shows from "../components/Shows.svelte";

export default {
  '/': Home,
  '/films': Films,
  '/shows': Shows,
  '/shows/:id': CardViewer,
  '/games': Games,
  '/settings': Settings,
  '*': NotFound,
}