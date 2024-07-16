import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const API_KEY = process.env.PERPLEXITY_API_KEY;

// https://docs.perplexity.ai/reference/post_chat_completions

const BASE_URL = 'https://api.perplexity.ai/';
const MODEL = 'llama-3-sonar-small-32k-online'; // default
const MAX_TOKENS = 150; // Set no. of token to return
const TEMPERATURE = 0.2; // Set the temperature here once. Lower = Less Creative.

const perplexity = createOpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL,
});

async function call_api(input) {
    const { text } = await generateText({
        model: perplexity(MODEL),
        messages: input,
    });
    return text;
}

const conversation = [
    { 
        'role': 'system', 
        'content': 'Soit précis et concis.' 
    },
    { 
        'role': 'user', 
        'content': 'Le terrain de mon voisin n\'est pas entretenu. Quelles démarches je peux entreprendre ?' 
    },
  ];

const reponse1 = await call_api(conversation);
console.log(reponse1);

conversation.push({
    'role': 'assistant',
    'content': reponse1
});

conversation.push({
    'role': 'user',
    'content': 'Quels articles du code civil peuvent être pertinents dans ce cas'
});

const reponse2 = await call_api(conversation);
console.log(reponse2);