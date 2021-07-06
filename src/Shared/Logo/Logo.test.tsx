import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import '@testing-library/jest-dom/extend-expect'
import Logo from './Logo';
describe("Logo testing", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Logo size={16} iconSize={16} />)
  });
  it("it should rendered correctly", () => {
    expect(wrapper).toHaveLength(1);
  })
});