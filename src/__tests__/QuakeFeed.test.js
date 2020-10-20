import React from 'react';
import { shallow } from 'enzyme';
import Quake from '../components/news/QuakeFeed'

test("testing Quake feed",  async () =>{

    const QuakeComp = shallow(<Quake />, 'div');
    expect(QuakeComp).toMatchSnapshot();

})