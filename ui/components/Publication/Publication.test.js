import React from 'react';
import ReactDOM from 'react-dom';
import Publication from './Publication';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Publication />, div);
  ReactDOM.unmountComponentAtNode(div);
});