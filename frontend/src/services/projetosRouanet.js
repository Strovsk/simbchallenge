export async function projetosRouanet() {
  const { VITE_HOST_BACKEND: hostBackend } = import.meta.env;

  const url = `${hostBackend}/api/projetos-rouanet`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar projetos da Lei Rouanet', error);
  }
}
