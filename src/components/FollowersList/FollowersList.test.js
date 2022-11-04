import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "./FollowersList";
const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("FollowersList", () => {
  it("should render first follower", async () => {
    render(<MockFollowersList />);
    const Follower = await screen.findByTestId("follower-0");
    expect(Follower).toBeInTheDocument();
  });
  it("should render 5 followers", async () => {
    render(<MockFollowersList />);
    const Followers = await screen.findAllByTestId(/follower/i);
    expect(Followers.length).toBe(5);
  });
});
