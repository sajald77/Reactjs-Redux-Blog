import React from 'react';
import { shallow, mount } from 'enzyme';
import {PostsIndex} from './posts_index';

describe('PostsIndex component', () => {

    let component;

    const fetchMock = jest.fn();
    const object={id:'',title:'',body:''}
    beforeEach(() => {
        component = shallow(
            <PostsIndex posts={[object,object]} fetchPosts={fetchMock}/>,
        );
      });

      it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
      });

      it('Should have two ids', () => {
        expect(component.find('.postid').length).toEqual(2);
      });

});