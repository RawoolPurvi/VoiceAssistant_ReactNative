import axios from 'axios'
import { apiKey } from '../constants';

console.log('API key loaded:', apiKey ? `${apiKey.slice(0,10)}...` : 'MISSING');

const client = axios.create({
    headers:{
        "Authorization": `Bearer ${apiKey}`,
        "content-type": "application/json"
    }
})

const chatGptUrl = 'https://api.openai.com/v1/chat/completions';
const dalleUrl = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages) => {
    try {
        // first ask GPT whether the prompt is asking for an image
        const res = await client.post(chatGptUrl, {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: 'Does this message want to generate an AI picture, image, art or anything similar? "' + prompt + '" . If yes, then return yes and nothing else, if no, then return no and nothing else.'
                }
            ]
        });
        const isArt = res.data?.choices[0]?.message?.content?.trim().toLowerCase();
        console.log('isArt:', isArt);
        if (isArt === 'yes') {
            console.log('DALL-E api call');
            return dalleApiCall(prompt, messages || []);
        } else {
            console.log('ChatGPT api call');
            return chatgptApiCall(prompt, messages || []);
        }
    } catch (error) {
        console.log('API error:', error.response?.data || error.message);
        return { success: false, message: error.message };
    }
}

const chatgptApiCall = async (prompt, messages) => {
    try {
        // messages already contains the user prompt added by fetchResponse
        const res = await client.post(chatGptUrl, {
            model: 'gpt-3.5-turbo',
            messages
        });
        const answer = res.data?.choices[0]?.message?.content;
        console.log('ChatGPT response:', answer);
        const updatedMessages = [...messages, { role: 'assistant',tyle: 'text', content: answer.trim() }];
        return { success: true, data: updatedMessages };
    } catch (err) {
        console.log('ChatGPT error:', err.response?.data || err.message);
        return { success: false, message: err.message };
    }
}

// const dalleApiCall = async (prompt, messages) => {
//     try {
//         const res = await client.post(dalleUrl, {
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             model: 'gpt-image-1',
//         });
//         // const url = res.data?.data[0]?.url;
//         console.log(JSON.stringify(res.data, null, 2));
//         // console.log('DALL-E image url:', url);
//         const updatedMessages = [...messages, { role: 'assistant', content: url }];
//         return { success: true, data: updatedMessages };
//     } catch (err) {
//         console.log('DALL-E error:', err.response?.data || err.message);
//         return { success: false, message: err.message };
//     }
// }


const dalleApiCall = async (prompt, messages) => {
    try {
        const res = await client.post(dalleUrl, {
            model: 'gpt-image-1',
            prompt,
            size: '1024x1024',
        });

        const item = res.data.data[0];

        let imageUri = null;

        if (item.url) {
            imageUri = item.url;
        } else if (item.b64_json) {
            imageUri = `data:image/png;base64,${item.b64_json}`;
        }

        console.log(imageUri.substring(0, 50));

        const updatedMessages = [
            ...messages,
            {
                role: 'assistant',
                type: 'image',
                content: imageUri,
            },
        ];

        return {
            success: true,
            data: updatedMessages,
        };

    } catch (err) {
        console.log(err.response?.data || err.message);

        return {
            success: false,
            message: err.message,
        };
    }
};