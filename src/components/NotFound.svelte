<script lang="ts">
import {_} from 'svelte-i18n'
import { Icon } from '@steeze-ui/svelte-icon';
import { Alert } from '@steeze-ui/remix-icons';

</script>

<div class="flex h-full w-full items-center justify-center fixed flex-col">
  <Icon src={Alert} theme='solid' class='fill-red-600 h-44'/>
  <p class="text-3xl text-red-600 font-extrabold">{$_('404_NotFound')}</p>
</div>