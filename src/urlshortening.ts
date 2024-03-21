import axios from 'axios';

const encodedParams = new URLSearchParams();
encodedParams.set('url', 'https://google.com/');

const options = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd2c775f6a1msh722a2a069383201p1cb4d4jsnbb423f97e6e9',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
 const response = await axios.request(options);
 console.log(response.data);
} catch (error) {
 console.error(error);
}
