import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AnimalModal from "./AnimalModal";

describe("Testing the Modal", () => {
  const baseProps = {
    show: true,
    form: {
      name: "",
      species: "",
      age: "",
      imageUrl: "",
      kidFriendly: false,
      vaccinated: false,
    },
    onSave: vi.fn(),
    onHide: vi.fn(),
    onChange: vi.fn()
  };

  it("renders to the page when props are true", () => {
    render(<AnimalModal {...baseProps} /> ),

   
    expect(screen.getByText("Add New Animal")).toBeInTheDocument();
  });
it ("saves an animal when the save animal button is clicked when calling onSave", () => {
    render(
      <AnimalModal
        {...baseProps}
      />
    );
    const saveButton =screen.getByRole("button", {name: "Save Animal"})
    fireEvent.click(saveButton)

    expect(saveButton).toHaveTextContent("Save Animal");  });
});
