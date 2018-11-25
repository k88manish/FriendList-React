import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import Pagination from "../Pagination";

configure({ adapter: new Adapter() });

const mockPageLoad = jest.fn();
const propsData = {
  activePage: 1,
  recordCount: 4,
  pageSize: 2,
  loadPage: mockPageLoad
};

describe("Pagination Test Suits", () => {
  it("it should render correctly", () => {
    const componentWrapper = shallow(<Pagination {...propsData} />);
    expect(componentWrapper).toMatchSnapshot();
  });

  it("Previous button will be not able there for first page", () => {
    const componentWrapper = shallow(<Pagination {...propsData} />);
    expect(componentWrapper.find('li[children="Prev"]').length).toEqual(0);
  });

  it("Next button click should call the load page function", () => {
    const componentWrapper = shallow(<Pagination {...propsData} />);
    componentWrapper.find('li[children="Next"]').simulate("click");
    expect(mockPageLoad).toHaveBeenCalledTimes(1);
  });

  it("Previous button will be not able there for first page", () => {
    const props = Object.assign({}, propsData, { activePage: 2 });
    const componentWrapper = shallow(<Pagination {...props} />);
    expect(componentWrapper.find('li[children="Next"]').length).toEqual(0);
  });

  it("Previous button will be not able there for first page", () => {
    mockPageLoad.mockReset();
    const props = Object.assign({}, propsData, { activePage: 2 });
    const componentWrapper = shallow(<Pagination {...props} />);
    componentWrapper.find('li[children="Prev"]').simulate("click");
    expect(mockPageLoad).toHaveBeenCalledTimes(1);
  });
});
