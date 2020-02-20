import { createStore , applyMiddleware, compose} from 'redux';
import createSagaMiddlerware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../saga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddlerware();
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(rootSaga);
    // store.dispatch({ type : 'HELLO'});
    // store.dispatch({ type : 'LOGIN'});
    // store.dispatch({ type : 'LOGIN'});
    // store.dispatch({ type : 'LOGIN'});
    return store;
};

export default configureStore;
