import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(()=>{
    wrapper = shallow(<App />);

});

it('shows a comment box', ()=>{
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', ()=>{
    expect(wrapper.find(CommentList).length).toEqual(1);
});