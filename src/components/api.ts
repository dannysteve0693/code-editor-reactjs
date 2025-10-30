import axios from 'axios'
import { LANGUAGE_VERSIONS, type Language } from '@/constants'

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
})

export const executeCode = async (language: Language, sourceCode: string) => {
    const response = await API.post('/execute', {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [{
            content: sourceCode
        }]
    });
    return response.data;
}