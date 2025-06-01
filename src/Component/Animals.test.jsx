import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Animals from "./Animals";


describe("Animals Component", () => {
  it("shows the nopets message when animal list is empty", () => {
    render(
      <Animals
        animals={[]}
        title="random string"
        nopets="No Pets Available"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );
    expect(screen.getByText("No Pets Available")).toBeInTheDocument();
  });

  it("shows the title message when the animal list is empty", () => {
    render(
      <Animals
        animals={[]}
        title="Ready For Adoption"
        nopets="No Pets Available"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );
  });

  it("renders a modal to the page when the edit button is clicked when calling onEditImage", () => {
    render(
      <Animals
        animals={[Animals]}
        title="Ready For Adoption"
        nopets="No Pets Available"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );
    const editButton =screen.getByRole("button", {name: "Edit"})
    fireEvent.click(editButton)

    expect(editButton).toHaveTextContent("Edit");  });
});
