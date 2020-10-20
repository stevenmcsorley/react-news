import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../components/news/WeatherWarningUKFeed'

test("testing Weather feed",  async () =>{

    const WeatherComp = shallow(<Weather />, 'div');
    expect(WeatherComp).toMatchSnapshot();

})