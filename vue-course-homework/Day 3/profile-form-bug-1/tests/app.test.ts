import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ProfileForm from "@/ProfileForm.vue";

describe("ProfileForm", () => {
  it("updates user data when form is submitted", async () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      about: "Some text here",
      email: "johndoe@example.com",
    };
    const wrapper = mount(ProfileForm, {
      props: {
        user,
      },
    });

    // Simulate user input
    const firstNameInput = wrapper.find("#first-name");
    await firstNameInput.setValue("Jane");
    expect(user.firstName).toBe("John");

    const lastNameInput = wrapper.find("#last-name");
    await lastNameInput.setValue("Doew");
    expect(user.lastName).toBe("Doe");

    const emailInput = wrapper.find("#email");
    await emailInput.setValue("janedoe@example.com");
    expect(user.email).toBe("johndoe@example.com");
    // Submit the form
    await wrapper.find("form").trigger("submit.prevent");

    // Check if the update event was emitted with the updated user data
    expect(wrapper.emitted("update")).toHaveLength(1);
    expect(wrapper.emitted("update")[0][0]).toEqual({
      firstName: "Jane",
      lastName: "Doew",
      about: "Some text here",
      email: "janedoe@example.com",
    });
  });
});
