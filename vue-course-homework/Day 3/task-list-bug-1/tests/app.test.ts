import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";
import { mount } from "@vue/test-utils";

let wrapper = null;
beforeEach(() => {
  wrapper = mount(App);
});

describe("App", () => {
  it("renders the task list correctly", () => {
    const taskItems = wrapper.findAll("li input");
    expect(taskItems.length).toBe(3);
    expect(taskItems[0].element.value).toBe("Task 1");
    expect(taskItems[1].element.value).toBe("Task 2");
    expect(taskItems[2].element.value).toBe("Task 3");
  });

  it('adds a new task when the "Add Task" button is clicked', async () => {
    const wrapper = mount(App);
    const addButton = wrapper.find('[data-test="button-add"]');
    await addButton.trigger("click");

    const taskItems = wrapper.findAll("li input");
    expect(taskItems.length).toBe(4);
    // @ts-expect-error - this works in the first test why not here?
    // is running fine, just TS complaining
    expect(taskItems[3].element.value).toBe("Task 4");
  });

  it('removes a task when the "X" button is clicked', async () => {
    const wrapper = mount(App);
    const removeButton = wrapper.find('[data-test="button-remove"]');
    await removeButton.trigger("click");

    const taskItems = wrapper.findAll("li input");
    expect(taskItems.length).toBe(2);
    // @ts-expect-error - this works in the first test why not here?
    // is running fine, just TS complaining
    expect(taskItems[0].element.value).toBe("Task 2");
  });

  // Add more tests for other functionalities as needed
});
