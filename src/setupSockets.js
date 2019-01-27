import  {socketOpen, socketClose} from './redux/actions';

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
      console.log('data', data);
    }
  } catch(e) {
    console.error('caught error');
  }

  

};

export default setupSockets;