
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
// import {openAI} from '@genkit-ai/openai'; // Comentado pois os fluxos agora são locais

const googleApiKey = process.env.GOOGLE_API_KEY;
// const openAIApiKey = process.env.OPENAI_API_KEY; // Comentado

const pluginsToUse = [];

if (googleApiKey && googleApiKey.trim() !== "") {
  pluginsToUse.push(googleAI({ apiKey: googleApiKey }));
  console.log("[Genkit Setup] Plugin Google AI configurado (embora os fluxos atuais possam não usá-lo ativamente).");
} else {
  console.warn(
    "\n\n**************************************************************************************\n" +
    "AVISO: GOOGLE_API_KEY não encontrada ou está vazia. Funcionalidades dependentes do Google AI\n" +
    "não operarão corretamente até que a chave seja configurada no arquivo .env (ou .env.local)\n" +
    "e o servidor reiniciado.\n" +
    "O gerador de prompts Veo3 e o Chatbot estão configurados para operar localmente se esta chave estiver ausente ou os plugins não forem usados.\n"+
    "**************************************************************************************\n\n"
  );
}

/* // Bloco OpenAI comentado pois o chatbot agora é local e gratuito
if (openAIApiKey && openAIApiKey.trim() !== "") {
  pluginsToUse.push(openAI({ apiKey: openAIApiKey }));
  console.log("[Genkit Setup] Plugin OpenAI configurado (embora os fluxos atuais possam não usá-lo ativamente).");
} else {
  console.warn(
    "\n\n**************************************************************************************\n" +
    "AVISO: OPENAI_API_KEY não encontrada ou está vazia. Funcionalidades dependentes da OpenAI\n" +
    "não operarão corretamente até que a chave seja configurada no arquivo .env (ou .env.local)\n" +
    "e o servidor reiniciado.\n" +
    "O Chatbot está configurado para operar localmente se esta chave estiver ausente ou o plugin não for usado.\n"+
    "**************************************************************************************\n\n"
  );
}
*/


export const ai = genkit({
  plugins: pluginsToUse,
  // O model padrão será definido no prompt específico ou pode ser global aqui se desejado.
  // Ex: model: (googleApiKey && googleApiKey.trim() !== "") ? 'googleai/gemini-1.5-flash-latest' : undefined,
  // logLevel: 'debug',
  // logSinks: ['json'],
});

if (pluginsToUse.length === 0) {
    console.log("[Genkit Setup] Nenhum plugin de IA externo configurado (nem Google AI, nem OpenAI). As funcionalidades de IA atuais (Gerador de Prompt, Chatbot) operarão em modo local/simplificado.");
}

