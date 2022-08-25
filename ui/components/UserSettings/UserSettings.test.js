import React from 'react';
import ReactDOM from 'react-dom';
import UserSettings from './UserSettings';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});