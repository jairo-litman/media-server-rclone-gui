<script lang="ts">
import {push} from 'svelte-spa-router'

const fetching = async () => {
  fetch('http://localhost:5572/rc/noop', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      'pepe': 'cacon',
      'chucha': 'wepe'
    })
  }).then(r => r.json()).then(d => console.log(d))
}
</script>

<button on:click={() => push('/this does not exist')}>To NOT FOUND</button>
<button on:click={fetching}>FETCH</button>

