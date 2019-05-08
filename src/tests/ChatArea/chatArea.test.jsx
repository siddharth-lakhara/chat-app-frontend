import React from 'react';
import { shallow } from 'enzyme';
import { ChatArea } from '../../components/chatArea/ChatArea';

describe('Render tests', () => {
  const props = {
    selectedUser: 'user1',
    history: {
      messages: [],
      currentText: '',
    },
    updateText: () => {},
    sendMsg: () => {},
  };
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(<ChatArea {...props} />);
    expect(renderedComponent.find('.chat-chatArea')).toHaveLength(1);
  });

  it('renders without history object present', () => {
    const newProps = {
      ...props,
      history: undefined,
    };
    const renderedComponent = shallow(<ChatArea {...newProps} />);
    expect(renderedComponent.find('.chat-chatArea')).toHaveLength(1);
  });

  it('renders without messages in history object', () => {
    const newProps = {
      ...props,
      history: {
        ...props.history,
        messages: undefined,
      },
    };
    const renderedComponent = shallow(<ChatArea {...newProps} />);
    expect(renderedComponent.find('.chat-chatArea')).toHaveLength(1);
  });

  it('renders without currentText in history object', () => {
    const newProps = {
      ...props,
      history: {
        ...props.history,
        currentText: undefined,
      },
    };
    const renderedComponent = shallow(<ChatArea {...newProps} />);
    expect(renderedComponent.find('.chat-chatArea')).toHaveLength(1);
  });
});

describe('functionality tests', () => {
  const props = {
    selectedUser: 'user1',
    history: {
      messages: [],
      currentText: 'sample text to send',
    },
    updateText: jest.fn(),
    sendMsg: jest.fn(),
  };

  it('send message is called when clicked on SEND button', () => {
    const renderedComponent = shallow(<ChatArea {...props} />);
    renderedComponent.find('.chat-sendMsg').simulate('click');
    expect(props.sendMsg).toHaveBeenCalled();
  });

  it('update text ', () => {
    const renderedComponent = shallow(<ChatArea {...props} />);
    renderedComponent.find('.chat-typingArea').simulate('change');
    expect(props.updateText).toHaveBeenCalled();
  });
});
