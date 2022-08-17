import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './UserInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});