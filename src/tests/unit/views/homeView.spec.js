import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  const wrapper = mount(HomeView);

  it('La estructura HTML se mantiene estable', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })
});