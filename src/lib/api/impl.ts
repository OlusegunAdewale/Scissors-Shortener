/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

async function shortenURL(longURL: string, accessToken: string): Promise<string | null> {
    try {
        const response: AxiosResponse = await axios.post(
            'https://api-ssl.bitly.com/v4/shorten',
            {
                long_url: longURL,
                domain: 'bit.ly' // Optional: specify the desired domain for shortening
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.status === 200) {
            const data = response.data;
            return data.link;
        } else {
            console.error('Bitly API error:', response.statusText);
            return null;
        }
    } catch (error: any) {
        console.error('Error occurred while shortening URL:', error.message);
        return null;
    }
}

// Example usage
const longURL = 'https://example.com/very-long-url-that-needs-to-be-shortened';
const accessToken = 'ee75435f58bf52fdbe1590523c36895b7988cfd0';
shortenURL(longURL, accessToken)
    .then((shortURL: string | null) => {
        if (shortURL) {
            console.log('Shortened URL:', shortURL);
        } else {
            console.log('URL shortening failed.');
        }
    })
    .catch((error: Error) => {
        console.error('An error occurred:', error.message);
    });
