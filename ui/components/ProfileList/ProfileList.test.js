import React from 'react';
import ReactDOM from 'react-dom';
import ProfileList from './ProfileList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileList />, div);
  ReactDOM.unmountComponentAtNode(div);
});