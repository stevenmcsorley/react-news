import React from 'react';
import { shallow } from 'enzyme';
import NewsFeed from '../components/news/NewsFeed'

test("testing NewsFeed feed",  async () =>{

    const NewsFeedComp = shallow(<NewsFeed />, 'div');
    expect(NewsFeedComp).toMatchSnapshot();

})