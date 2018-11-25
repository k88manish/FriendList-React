import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import AddFriendInput from "../AddFriendInput";
import { MALE } from "../../constants/Common";

configure({ adapter: new Adapter() });

const mockAddFriend = jest.fn();
const propsData = {
  addFriend: mockAddFriend
};

describe("Add Input Test Suits", () => {
  it("it should render correctly", () => {
    const componentWrapper = shallow(<AddFriendInput {...propsData} />);
    expect(componentWrapper).toMatchSnapshot();
  });

  it("simulate submit on empty name field in form", () => {
    const componentWrapper = shallow(<AddFriendInput {...propsData} />);
    componentWrapper.setState({ name: "", gender: MALE });
    expect(mockAddFriend).toHaveBeenCalledTimes(0);
    componentWrapper.find({ name: "name" }).simulate("keydown", { which: 13 });
    expect(mockAddFriend).toHaveBeenCalledTimes(0);
  });

  it("simulate submit on complete form", () => {
    const componentWrapper = shallow(<AddFriendInput {...propsData} />);
    componentWrapper.setState({ name: "Manish", gender: MALE });
    componentWrapper.find({ name: "name" }).simulate("keydown", { which: 13 });
    expect(mockAddFriend).toHaveBeenCalledTimes(1);
  });
});
