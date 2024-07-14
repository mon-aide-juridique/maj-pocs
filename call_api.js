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

const { text } = await generateText({
    model: perplexity(MODEL),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

console.log(text);