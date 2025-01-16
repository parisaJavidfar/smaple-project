import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders the message correctly", () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: "Hello Vitest!",
      },
    });

    expect(wrapper.text()).toContain("Hello Vitest!");
  });
});
