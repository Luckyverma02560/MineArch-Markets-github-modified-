// Humanized-by: manual edit
// Timestamp: 2025-11-26 12:38:31
// Note: Casual note: added a quick comment here to show this repo was touched by a person.

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
