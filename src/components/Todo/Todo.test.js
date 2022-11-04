import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./Todo";
describe("Todo", () => {
  const MockedTodo = () => (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
  const addTasks = (tasks) => {
    for (let task of tasks) {
      const inputComponent = screen.getByPlaceholderText(
        "Add a new task here..."
      );
      const addBtn = screen.getByText("Add");
      fireEvent.change(inputComponent, { target: { value: task } });
      fireEvent.click(addBtn);
    }
  };
  it("should add task to todo list", () => {
    render(<MockedTodo />);
    addTasks(["go to market", "ok"]);
    const list = screen.getAllByTestId("todo-container");
    expect(list.length).toBe(2);
    const numberOfTasks = screen.getByTestId("numberOfTasks");
    expect(numberOfTasks.textContent).toBe("2 tasks left");
  });

  it("should scratch task", () => {
    render(<MockedTodo />);
    addTasks(["go to market"]);
    const task = screen.getByTestId("todo-container");
    expect(task.className).toBe("todo-item");
    fireEvent.click(task);

    // option 1
    expect(task.className).toBe("todo-item todo-item-active");
    // option 2
    expect(task).toHaveClass("todo-item-active");
  });
});
