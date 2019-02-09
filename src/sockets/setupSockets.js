import  {socketOpen, socketClose} from '../redux/actions';
import serverActions from './serverActions';

const setupSockets = (dispatch) =>{
  try {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      dispatch(socketOpen());
    }

    socket.onclose = () => {
      dispatch(socketClose());
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const {type, ...rest} = data;
      console.log('type', type);
      const action = serverActions[type];
      if (action) {
        action(dispatch, rest);
      }
    }

    return socket;
  } catch(e) {
    console.error('caught error');
  }

  

};

export default setupSockets;