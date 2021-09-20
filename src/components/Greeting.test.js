import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Greeting />", () => {
  test("renders Hello World ad a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // nothing :c

    //Assert
    const helloWordElement = screen.getByText("Hello World!", { exact: true });
    expect(helloWordElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // nothing :c

    //Assert
    const outPutElement = screen.getByText("good to see you", { exact: false });
    expect(outPutElement).toBeInTheDocument();
  });

  test("render 'Changed!' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outPutElement = screen.getByText("Changed!", { exact: true });
    expect(outPutElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outPutElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outPutElement).toBeNull();
  });
});
