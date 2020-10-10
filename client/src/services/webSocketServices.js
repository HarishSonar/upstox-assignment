import io from 'socket.io-client';
import store from '../store/'

const servicesConfig = {
    baseURL: 'http://kaboom.rksv.net/watch',
};
const webSockets = io(servicesConfig.baseURL);

class WebServiceClass {
    subscribe = () => {
        webSockets.emit('sub', {state: true});
    }

    unsubscribe = () => {
        webSockets.emit('unsub', {state: false});
    }

    ping = () => {
        webSockets.emit('ping', {});
    }
}

webSockets.on('data', (data, ack) => {
    store.dispatch({
        type:'UPDATE_DATA',
        data
    });
    ack(1);
});

webSockets.on('error', (data) => {
    console.log(`Response: ${data}`)
});


export default new WebServiceClass(servicesConfig);
