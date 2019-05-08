import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../App';

const props = {
  socketOpen: true,
  userLoggedin: false,
  loginError: '',
  userLogin: jest.fn(),
};

describe('Rendering App', () => {
  it('Socket is closed', () => {
    const newProps = {
      ...props,
      socketOpen: false,
    };
    const renderedComponenent = shallow(<App {...newProps} />);
    expect(renderedComponenent.find('.App')).toHaveLength(1);
  });

  it('Socket is open', () => {
    const renderedComponenent = shallow(<App {...props} />);
    expect(renderedComponenent.find('.App')).toHaveLength(1);
  });

  it('Socket is open and user is logged in', () => {
    const newProps = {
      ...props,
      userLoggedin: true,
    };
    const renderedComponenent = shallow(<App {...newProps} />);
    expect(renderedComponenent.find('.App')).toHaveLength(1);
  });
});
