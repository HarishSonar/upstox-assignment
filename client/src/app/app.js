import React, {Component} from 'react';
import services from '../services'

const {axiosServices, webServices} = services;

export default class ReactComponent extends Component {
    constructor(props) {
        super(props);
        webServices.subscribe();
        // axiosServices.getMethod('/historical').then(() => {});
    }

    render() {
        return (
            <div>
                <div>{`Dynamic Chart Data ${this.props.data}`}</div>
                <button onClick={() => webServices.unsubscribe()}>Unsubscribe</button>
                <button onClick={() => webServices.subscribe()}>Subscribe</button>
            </div>
        );
    }

    componentWillUnmount = () => {
        webServices.unsubscribe();
    }
}
