import React from 'react';
import ReactDOM from 'react-dom';
import PostsGrid from './PostsGrid';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});