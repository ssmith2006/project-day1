import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import VolunteerOppsModal from "./VolunteerModal";

describe("Volunteer Modal", () => {
  const baseVolProps = {
    show: true,
    form: {
      title: "",
      description: "",
      location: "",
      day1: false,
      day2: false,
      day3: false,
      day4: false,
      day5: false,
      day6: false,
      isFilled: false,
    },
    onSave: vi.fn(),
    onHide: vi.fn(),
    onchange: vi.fn(),
  };

  it("renders all fields and the save opportunity button", () => {
    render(<VolunteerOppsModal {...baseVolProps}/>);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });
});
