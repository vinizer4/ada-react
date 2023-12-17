import {IFormData} from "../interfaces/IFormData.ts";

export class LeadService {
    static async createLead(formData: IFormData) {
        try {
            const response = await fetch('http://localhost:3000/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            return response;
        } catch (error) {
            console.error("Falha ao enviar dados", error);
            throw error;
        }
    }
}