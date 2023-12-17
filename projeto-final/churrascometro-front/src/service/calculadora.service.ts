export class CalculatorService {
    static async calculate(qtHomem: number, qtMulher: number, qtCrianca: number) {
        try {
            const response = await fetch(`http://localhost:3000/calculadora/total?homem=${qtHomem}&mulher=${qtMulher}&crianca=${qtCrianca}`);
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Falha ao buscar dados", error);
            throw error;
        }
    }
}
