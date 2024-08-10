
import type { Directive } from 'vue';

const noSpacesDirective: Directive = {
  mounted(el) {
    el.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      target.value = target.value.replace(/\s+/g, '');
      target.dispatchEvent(new Event('input'));
    });
  },
};

export default noSpacesDirective;
