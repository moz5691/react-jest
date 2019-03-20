import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(()=> {
    wrapper = mount(<Root><CommentBox/></Root>);
});

afterEach(()=>{
    wrapper.unmount();
});

it('has a test area and buttons', ()=>{
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
});

describe('the text area', ()=>{

    beforeEach(()=>{
        wrapper.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        wrapper.update();
    });

    it('has a text area that users can type in', ()=>{
        expect(wrapper.find('textarea').prop('value')).toEqual("new comment");
    });

    it('clears up a text area after submit', ()=>{
        wrapper.find('textarea').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual("");
    });

});

