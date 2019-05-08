import React from 'react';
import { shallow } from 'enzyme';
import { Pages } from '../../App';

const props = {
  socketOpen: true,
  userLoggedin: false,
  loginError: '',
  userLogin: jest.fn(),
};

describe('Render test', () => {
  it('Socket is closed', () => {
    const newProps = {
      ...props,
      socketOpen: false,
    };
    const renderedComponenent = shallow(<Pages {...newProps} />);
    expect(renderedComponenent.find('.App-chat')).toHaveLength(1);
  });

  it('Socket is open', () => {
    const renderedComponenent = shallow(<Pages {...props} />);
    expect(renderedComponenent.find('.App-chat')).toHaveLength(1);
    expect(renderedComponenent.find('.App-chat.login')).toHaveLength(1);
  });

  it('Socket is open and user is logged in', () => {
    const newProps = {
      ...props,
      userLoggedin: true,
    };
    const renderedComponenent = shallow(<Pages {...newProps} />);
    expect(renderedComponenent.find('.App-chat')).toHaveLength(1);
  });
});

describe('functinality test', () => {
  const renderedComponenent = shallow(<Pages {...props} />);
  describe('input changes are handled properly', () => {
    const input = renderedComponenent.find('.login-userName-input');
    const mockEvent = {
      target: { value: 'sidd' }
    };

    it('state is set to default', () => {
      expect(renderedComponenent.state().userName).toBe('');
    });

    it('state is updated on input change', () => {
      input.simulate('change', mockEvent);
      expect(renderedComponenent.state().userName).toBe('sidd');
    });
  });

  it('clicking send calls expected functions', () => {
    const button = renderedComponenent.find('.login-button');
    button.simulate('click', {});
    expect(props.userLogin).toHaveBeenCalled();
  });
})