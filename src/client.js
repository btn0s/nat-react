import Client from 'shopify-buy';
import CLIENT_OPTIONS from './client_options';

const client = Client.buildClient(CLIENT_OPTIONS);

export default client;