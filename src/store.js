import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/reducers';
import socketIO from 'socket.io-client';
import socketIoMiddleware from './middleware/socket-middleware';
import createLogger from 'redux-logger';

const io = socketIO.connect(`http://localhost:9092`);

const logger = createLogger();

const store = createStore(reducers,
              applyMiddleware(socketIoMiddleware(io),logger)
            );
export default store;
