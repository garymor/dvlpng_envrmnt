export default function getBaseUrl() {
    //const inDevelopment = window.location.hostname === 'localhost';
    const inDevelopment = true;
    return inDevelopment ? 'http://localhost:3001' : '/'
}