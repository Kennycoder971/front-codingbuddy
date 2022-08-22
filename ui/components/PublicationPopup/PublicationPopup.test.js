import React from 'react';
import ReactDOM from 'react-dom';
import PublicationPopup from './PublicationPopup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PublicationPopup />, div);
  ReactDOM.unmountComponentAtNode(div);
});