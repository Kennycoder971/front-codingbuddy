import React from 'react';
import ReactDOM from 'react-dom';
import Reply from './Reply';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reply />, div);
  ReactDOM.unmountComponentAtNode(div);
});