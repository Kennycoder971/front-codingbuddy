import React from 'react';
import ReactDOM from 'react-dom';
import SettingPopup from './SettingPopup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SettingPopup />, div);
  ReactDOM.unmountComponentAtNode(div);
});