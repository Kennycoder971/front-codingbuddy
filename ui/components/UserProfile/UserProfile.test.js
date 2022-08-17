import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './UserProfile';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});