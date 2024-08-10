import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import IPLookup from "../components/IPTranslator.vue";
import { useIPStore } from "../stores/ipStore";
import { createPinia } from "pinia";
import { vi } from "vitest";

describe("IPLookup.vue", () => {
  let wrapper: any;
  let ipStore: any;

  beforeEach(() => {
    const pinia = createPinia();
    wrapper = mount(IPLookup, {
      global: {
        plugins: [pinia],
      },
    });
    ipStore = useIPStore();
    // Mock the addIP method
    vi.spyOn(ipStore, "addIP").mockImplementation(() => {
      ipStore.ipAddresses.push({
        id: Date.now(),
        ip: "",
        country: "",
        loading: false,
      });
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("IP Lookup");
  });

  it("adds a new IP input field when the Add button is clicked", async () => {
    await wrapper.find("button").trigger("click");
    expect(ipStore.addIP).toHaveBeenCalled();
  });

  it("validates IP addresses correctly", async () => {
    const input = wrapper.find("input");
    await input.setValue("256.256.256.256");
    await input.trigger("blur");
    expect(wrapper.find(".v-messages__message").text()).toBe(
      "Must be a valid IP address"
    );

    await input.setValue("192.168.1.1");
    await input.trigger("blur");
    expect(wrapper.find(".v-messages__message").exists()).toBe(false);
  });

  it("calls fetchCountry when a valid IP address is entered", async () => {
    ipStore.fetchCountry = vi.fn();
    const input = wrapper.find("input");
    await input.setValue("192.168.1.1");
    await input.trigger("blur");
    expect(ipStore.fetchCountry).toHaveBeenCalledWith(
      expect.any(Number),
      "192.168.1.1"
    );
  });

  it("displays an error message when the fetch fails", async () => {
    ipStore.ipAddresses[0].error = "Invalid IP";
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".error").text()).toBe("Invalid IP");
  });

  it("closes the component when the close icon is clicked", async () => {
    await wrapper.find(".mdi-close").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
