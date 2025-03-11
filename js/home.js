import { verificarAutenticacao } from './autorizar.js';

(async () => {
  const autenticado = await verificarAutenticacao();

  const overlay = document.getElementById('loading-overlay');
  const conteudo = document.getElementById('conteudo-protegido');

  if (autenticado) {
    overlay.remove(); // Remove o carregamento
    conteudo.style.display = 'block'; // Exibe a área restrita
  }
})();

