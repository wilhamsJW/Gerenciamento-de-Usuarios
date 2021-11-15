import axios from 'axios';

/**Axios é um cliente HTTP, que funciona tanto no browser quanto em node. 
 * ... A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest
 * quanto com a interface http do node. Isso significa que o mesmo código utilizado 
 * para fazer requisições ajax no browser também funciona no servidor */

const api = axios.create({
    baseURL: 'http://localhost:3336',
});

export default api; 