import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./AddInput";
const mockedSetTodos = jest.fn();
describe("AddInput", () => {
  it("Should render input component", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputComponent = screen.getByPlaceholderText(
      "Add a new task here..."
    );
    expect(inputComponent).toBeInTheDocument();
  });

  it("Should change input value", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputComponent = screen.getByPlaceholderText(
      "Add a new task here..."
    );
    fireEvent.change(inputComponent, { target: { value: "jib dabbousa gaz" } });
    expect(inputComponent.value).toBe("jib dabbousa gaz");
  });

  it("Should have an empty input when add btn is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputComponent = screen.getByPlaceholderText(
      "Add a new task here..."
    );
    const addBtn = screen.getByText("Add");

    fireEvent.change(inputComponent, { target: { value: "jib dabbousa gaz" } });
    fireEvent.click(addBtn);

    expect(inputComponent.value).toBe("");
  });
});
