import {
  updateHistory, updateText, receiveMessage, usersUpdate, sendMsg,
} from '../../redux/actions/history';
import types from '../../redux/types';
import { usersReducer, initialState } from '../../redux/reducers/usersReducer';

describe('update history', () => {
  it('calls the action correctly', () => {
    expect(updateHistory()).toHaveProperty('type', types.UPDATE_HISTORY);
  });

  describe('update history reducer', () => {
    const prevState = {
      ...initialState,
      currentUser: 'user1',
      selectedUser: 'swayam',
      history: {
        swayam: {
          messages: [],
          currentText: 'Hi',
        },
      },
    };
    const state = usersReducer(prevState, {
      type: types.UPDATE_HISTORY,
    });
    const expectedState = {
      ...prevState,
      history: {
        swayam: {
          messages: [{ from: 'user1', to: 'swayam', msg: 'Hi' }],
          currentText: '',
        },
      },
    };
    it('handles the reducer', () => {
      expect(state).not.toEqual(prevState);
      expect(state).toEqual(expectedState);
    });
  });
});

describe('update text', () => {
  it('calls the action correctly', () => {
    expect(updateText({ target: { value: '' } })).toHaveProperty('type', types.TEXT_UPDATE);
  });

  describe('update history reducer', () => {
    const prevState = {
      ...initialState,
      currentUser: 'user1',
      selectedUser: 'swayam',
      history: {
        swayam: {
          messages: [],
          currentText: '',
        },
      },
    };
    const state = usersReducer(prevState, {
      type: types.TEXT_UPDATE,
      payload: 'Hi',
    });
    const expectedState = {
      ...prevState,
      history: {
        swayam: {
          messages: [],
          currentText: 'Hi',
        },
      },
    };
    it('handles the reducer', () => {
      expect(state).not.toEqual(prevState);
      expect(state).toEqual(expectedState);
    });
  });
});

describe('Receive Message', () => {
  it('calls the action correctly', () => {
    expect(receiveMessage()).toHaveProperty('type', types.RCV_MSG);
  });

  describe('Receive message reducer', () => {
    const prevState = {
      ...initialState,
      currentUser: 'user2',
      selectedUser: '',
      history: {
        user1: {
          messages: [],
          currentText: '',
        },
      },
    };
    const state = usersReducer(prevState, {
      type: types.RCV_MSG,
      payload: {
        from: 'user1',
        to: 'user2',
        data: 'Hi',
      },
    });
    const expectedState = {
      ...prevState,
      history: {
        user1: {
          messages: [{
            from: 'user1',
            to: 'user2',
            msg: 'Hi',
          }],
          currentText: '',
        },
      },
    };

    it('handles the reducer', () => {
      expect(state).not.toEqual(prevState);
      expect(state).toEqual(expectedState);
    });
  });
});

describe('users update', () => {
  it('calls the action correctly', () => {
    expect(usersUpdate()).toHaveProperty('type', types.USERS_UPDATE);
  });

  describe('users update reducer', () => {
    const prevState = {
      ...initialState,
      currentUser: '',
      selectedUser: '',
      history: {},
    };
    const state = usersReducer(prevState, {
      type: types.USERS_UPDATE,
      payload: ['newUser'],
    });
    const expectedState = {
      ...prevState,
      usersList: ['newUser'],
      history: {
        newUser: {
          messages: [],
          currentText: '',
        },
      },
    };
    it('handles the reducer', () => {
      expect(state).not.toEqual(prevState);
      expect(state).toEqual(expectedState);
    });
  });
});

describe('send msg', () => {
  it('calls action correctly', () => {
    expect(sendMsg()).toHaveProperty('type', types.SEND_MSG);
  });
});
