import React from 'react';
import { shallow } from 'enzyme';
import { UsersList } from '../../components/usersList/UsersList';

describe('Renders without crashing', () => {
  const props = {
    usersList: ['user1', 'user2', 'user3'],
    selectedUser: '',
    changeSelectedUser: () => {},
  };
  it('default render', () => {
    const renderedComponent = shallow(<UsersList {...props} />);
    expect(renderedComponent.find('.chat-usersList')).toHaveLength(1);
  });

  it('All the users are rendered', () => {
    const renderedComponent = shallow(<UsersList {...props} />);
    expect(renderedComponent.find('.usersList-item')).toHaveLength(3);
  });
});


describe('Functionality test', () => {
  const props = {
    usersList: ['user1'],
    selectedUser: '',
    changeSelectedUser: jest.fn(),
  };
  describe('calls changeSelectedUser function as expected', () => {
    it('calls on click', () => {
      const renderedComponent = shallow(<UsersList {...props} />);
      renderedComponent.find('.usersList-item').simulate('click');
      expect(props.changeSelectedUser).toHaveBeenCalled();
    });

    it('calls on hitting enter', () => {
      const renderedComponent = shallow(<UsersList {...props} />);
      renderedComponent.find('.usersList-item').simulate('keyDown', { keyCode: 13 });
      expect(props.changeSelectedUser).toHaveBeenCalled();
    });
  });
});
