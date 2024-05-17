export async function projetosRouanet() {
  const { VITE_HOST_BACKEND: hostBackend } = import.meta.env;

  const url = `${hostBackend}/api/projetos-rouanet`;

  try {
    const response = await fetch(url);
    const response_result = await response.json();
    const data = response_result.data;
    return data;
  } catch (error) {
    console.error('Erro ao buscar projetos da Lei Rouanet', error);
  }
}
