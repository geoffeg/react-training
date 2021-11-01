import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { TextArea } from "./Input.stories";
describe("Input", () => {
  it("should throw an error if id is empty", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});

    expect(() =>
      render(
        <Input type="text" label="label" value="" id="" onChange={() => {}} />
      )
    ).toThrow("ID must be populated");
  });
  it('should render an input type="text" and an attached label', () => {
    render(
      <Input type="text" label="label" value="" id="1" onChange={() => {}} />
    );
    expect(screen.getByLabelText("label")).toHaveAttribute("type", "text");
    // expect(input).toHaveAttribute("type", "text");
  });
  it("should render an input textarea and an attached label when type=textarea", () => {
    render(
      <TextArea
        type="textArea"
        label="label"
        value=""
        id="1"
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText("label")).toBeInstanceOf(HTMLTextAreaElement);
  });
});
