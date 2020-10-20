import React from 'react';
import { shallow } from 'enzyme';
import Volcano from '../components/news/VolcanoFeed'

test("testing Volcano feed",  async () =>{

    const VolcanoComp = shallow(<Volcano />, 'div');
    expect(VolcanoComp).toMatchSnapshot();

})