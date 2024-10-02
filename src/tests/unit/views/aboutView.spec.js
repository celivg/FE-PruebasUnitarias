import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect, test } from 'vitest'

import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'

describe("Renderiza AboutView al navegar a la ruta", async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/about",
        name: "about",
        component: AboutView
      }
    ]
  })

  it('Navega y renderiza la vista correspondiente', async () => {
    routerPrueba.push({ name: 'about' });

    await routerPrueba.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    });

    expect(wrapper.findComponent(AboutView).exists()).toBeTruthy();
  })

  test('La estructura HTML se mantiene estable', () => {
    const wrapper = mount(AboutView);

    expect(wrapper.html()).toMatchSnapshot();
  })
})
