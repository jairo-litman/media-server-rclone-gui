// import sveltePreprocess from 'svelte-preprocess'
import preprocess from 'svelte-preprocess'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  // preprocess: sveltePreprocess()
  preprocess: [
    preprocess({
      postcss: {
        plugins: [
          tailwind,
          autoprefixer,
        ],
      },
    }),
  ],
}
