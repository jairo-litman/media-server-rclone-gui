<script lang="ts">
import { _ } from "svelte-i18n";
import logo from "../assets/rclone.svg";
import { Icon } from "@steeze-ui/svelte-icon";
import { Settings4, Movie2, Tv2, Gamepad } from "@steeze-ui/remix-icons";
import { link } from 'svelte-spa-router'
import active from 'svelte-spa-router/active'

const navItems = [
	{
		icon: Movie2,
		id: "films",
	},
	{
		icon: Tv2,
		id: "shows",
	},
	{
		icon: Gamepad,
		id: "games",
	},
	{
		icon: Settings4,
		id: "settings",
	},
];

</script>

<nav id="navbar" class="h-full fixed top-0 left-0 w-16 bg-neutral-800 pt-2 shadow-lg shadow-stone-900 z-50">
	<ul class="flex flex-col self-center items-center justify-self-center justify-items-center gap-5 w-16">
		<li>
			<a href="/" use:link class="sidebar-icon-holder group" use:active>
				<img src={logo} alt="logo" id="logo" class="h-8 block m-auto"/>
				<span class="sidebar-tooltip">{$_("home")}</span>
			</a>
		</li>
	{#each navItems as i}
		<li>
			<a href='/{i.id}' use:link class="sidebar-icon-holder group" use:active>
				<Icon src={i.icon} theme="solid" class="sidebar-icon" />
				<span class="sidebar-tooltip">{$_(i.id)}</span>
			</a>
		</li>
	{/each}
	</ul>
</nav>
