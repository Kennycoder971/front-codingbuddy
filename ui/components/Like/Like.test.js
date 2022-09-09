import React from 'react';
import ReactDOM from 'react-dom';
import Like from './Like';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Like />, div);
  ReactDOM.unmountComponentAtNode(div);
});