import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'

import App from '@/App.vue'
import ContactView from '@/views/ContactView.vue'

describe("Renderiza ContactView al navegar a la ruta", async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/contact",
        name: "contact",
        component: ContactView
      }
    ]
  })

  it('Navega y renderiza la vista correspondiente', async () => {
    routerPrueba.push({ name: 'contact' });

    await routerPrueba.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    });

    expect(wrapper.findComponent(ContactView).exists()).toBeTruthy();
  })
})