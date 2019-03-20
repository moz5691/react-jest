import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

beforeEach(()=>{
    const initialState = {
        comments: ['test comment 1', 'test comment 2']
    };
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    );
});

afterEach(()=>{
    wrapper.unmount();
});

it('create one LI per comment',()=>{
    expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', ()=>{
    //console.log(wrapper.render().text());
    expect(wrapper.render().text()).toContain('test comment 1');
    expect(wrapper.render().text()).toContain('test comment 2');
});

