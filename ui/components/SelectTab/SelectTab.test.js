import React from 'react';
import ReactDOM from 'react-dom';
import SelectTab from './SelectTab';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectTab />, div);
  ReactDOM.unmountComponentAtNode(div);
});