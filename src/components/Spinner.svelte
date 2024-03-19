<script lang='ts'>
import { Icon } from '@steeze-ui/svelte-icon';
import { Loader5 } from '@steeze-ui/remix-icons';

let color = 'fill-white'
export { color as class }

</script>

<div class="flex items-center justify-items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Icon src={Loader5} theme='solid' class='h-20 animate-spin {color || ''}'/></div>