import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import FriendList from "../FriendList";

configure({ adapter: new Adapter() });

const mockPageLoad = jest.fn();
const propsData = {
  friends: [{ name: "manish", id: 1, gender: "Male" }, { name: "mark", id: 2, gender: "Female" }],
  actions: {
    starFriend: jest.fn()
  }
};

describe("FriendList Test Suits", () => {
  it("it should render correctly", () => {
    const componentWrapper = shallow(<FriendList {...propsData} />);
    expect(componentWrapper).toMatchSnapshot();
  });

  it("List should be having 2 items", () => {
    const componentWrapper = shallow(<FriendList {...propsData} />);
    expect(componentWrapper.find("FriendListItem").length).toEqual(2);
  });
});
