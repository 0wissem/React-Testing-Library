import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "./FollowersList";
import axios from "axios";

const mockResponse = {
  data: {
    results: [
      {
        email: "micheal.grant@example.com",
        gender: "male",
        id: { name: "PPS", value: "1809380T" },
        location: {
          city: "Portarlington",
          state: "South Dublin",
          country: "Ireland",
          postcode: 24733,
        },
        login: {
          uuid: "b5e8ecd2-62b6-4b31-ad27-25aeb3c7bd30",
          username: "blackkoala234",
          password: "spawn",
          salt: "BkRyTnfA",
          md5: "eae08324609adf903790f93bc5d6d5b4",
        },
        name: { title: "Mr", first: "Micheal", last: "Grant" },
        nat: "IE",
        phone: "061-174-7820",
        picture: {
          large: "https://randomuser.me/api/portraits/men/92.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
        },
        registered: { date: "2015-03-07T06:39:32.432Z", age: 7 },
      },
    ],
  },
};
const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
jest.mock("axios");
describe("FollowersList", () => {
  it("should render first follower", async () => {
    axios.get.mockResolvedValue(mockResponse);
    render(<MockFollowersList />);
    const Follower = await screen.findByTestId("follower-0");
    expect(Follower).toBeInTheDocument();
  });

  it("should render 1 follower in total", async () => {
    axios.get.mockResolvedValue(mockResponse);
    render(<MockFollowersList />);
    const Followers = await screen.findAllByTestId(/follower/i);
    expect(Followers.length).toBe(1);
  });
});
