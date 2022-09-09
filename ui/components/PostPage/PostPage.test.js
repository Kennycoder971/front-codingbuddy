import React from 'react';
import ReactDOM from 'react-dom';
import PostPage from './PostPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});