import React from 'react';
import { shallow, mount } from 'enzyme';
import {PostsDetails} from './posts_detail';

describe('PostsDetails component', () => {

    let component;

    const fetchMock = jest.fn();
    const fetchcomments = jest.fn();
    const deletecomment = jest.fn();
    const deltePost = jest.fn();
    const object={id:'',title:'',body:''};
    beforeEach(() => {
        component = shallow(
            <PostsDetails 
            match={{params:{id:1}}} 
            post={[object]} 
            fetchPosts={fetchMock} 
            fetchComments={fetchcomments} 
            deleteComment={deletecomment}
            deletePost={deltePost}/>,
        );console.log("dsafadsfa")
      });

      it('Should render successfully', () => {
        console.log("dsafadsfa")
        component = shallow(
            <PostsDetails 
            match={{params:{id:1}}} 
            post={[object]} 
            fetchPosts={fetchMock} 
            fetchComments={fetchcomments} 
            deleteComment={deletecomment}
            deletePost={deltePost}/>,
        );
        expect(component.exists()).toEqual(true);
      });

});