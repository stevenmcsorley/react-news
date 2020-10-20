import React from 'react';
import { shallow } from 'enzyme';
import Twitter from '../components/news/TwitterFactory';

test("testing Twitter feed",  async () =>{

    const TwiiterComp = shallow(<Twitter />, 'div');
    expect(TwiiterComp).toMatchSnapshot();

})