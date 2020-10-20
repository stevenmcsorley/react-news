import React from 'react';
import { shallow } from 'enzyme';
import Who from '../components/news/WhoFeed'

test("testing Who feed",  async () =>{

    const WhoComp = shallow(<Who />, 'div');
    expect(WhoComp).toMatchSnapshot();

})