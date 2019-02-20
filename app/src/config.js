export const production = false; // set it to true when deploy to the server

const domain = production ? '139.59.227.127' : '127.0.0.1:3001'; 
export const websocketUrl = `ws://${domain}`
export const apiUrl = `http://${domain}`