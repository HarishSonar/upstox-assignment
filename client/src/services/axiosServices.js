import axios from 'axios';

const servicesConfig = {
    baseURL: 'http://kaboom.rksv.net/api/',
    headers: {
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json'
    }
};

class ServiceClass {
    constructor(config) {
        this.request = this.getAxiosInstance(servicesConfig);
    }

    getAxiosInstance = (config) => {
        return axios.create({
            ...config
        });
    }

    getMethod = (url, config) => {
        return this.request.get(url, config).then((response) => {
            return response;
        }).catch((error) => {
            // perform error handling
        });
    }
}

export default new ServiceClass(servicesConfig);
