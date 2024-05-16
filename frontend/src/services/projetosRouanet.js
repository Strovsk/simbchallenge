export async function projetosRouanet() {
    const url = 'http://localhost:7800/api/projetos-rouanet';

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar projetos da Lei Rouanet', error);
    }
}