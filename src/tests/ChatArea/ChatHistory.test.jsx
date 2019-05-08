import React from 'react';
import { shallow } from 'enzyme';
import ChatHistory from '../../components/chatArea/ChatHistory';

describe('Renders without crashing', () => {
  const mockMessages = [{
    from: 'user1',
    msg: 'message',
  }, {
    from: 'user2',
    msg: 'message',
  }];

  const props = {
    messages: [],
    selectedUser: 'user1',
  };

  it('default render', () => {
    const renderedComponent = shallow(<ChatHistory {...props} />);
    expect(renderedComponent.find('.chat-history')).toHaveLength(1);
  });

  it('All the messages are rendered', () => {
    const newProps = {
      ...props,
      messages: mockMessages,
    };
    const renderedComponent = shallow(<ChatHistory {...newProps} />);
    expect(renderedComponent.find('.chat-history-item')).toHaveLength(mockMessages.length);
  });
});
