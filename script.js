// Alternar entre modo claro e escuro
const toggleBtn = document.getElementById("toggle-tema");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Função para configurar a visibilidade dos ícones com base no tema atual
function configurarTema() {
  if (document.body.classList.contains("dark-theme")) {
    sunIcon.style.display = "none";  // Esconde o ícone do sol no modo escuro
    moonIcon.style.display = "block";  // Mostra o ícone da lua no modo escuro
  } else {
    sunIcon.style.display = "block";  // Mostra o ícone do sol no modo claro
    moonIcon.style.display = "none";  // Esconde o ícone da lua no modo claro
  }
}

// Adiciona a funcionalidade de alternância de tema
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  configurarTema();  // Atualiza a visibilidade dos ícones quando o tema mudar
});

// Chama a função para configurar o tema inicialmente
configurarTema();

// Validação de Configurações
const form = document.getElementById("form-config");
const msg = document.getElementById("mensagem-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();  // Evita o envio do formulário
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    msg.textContent = "Preencha todos os campos.";  // Mensagem de erro
    msg.style.color = "red";  // Cor da mensagem de erro
  } else {
    msg.textContent = "Configurações salvas com sucesso!";  // Mensagem de sucesso
    msg.style.color = "green";  // Cor da mensagem de sucesso
  }
});

// Botão de Cancelar
document.getElementById("btn-cancelar").addEventListener("click", () => {
  form.reset();  // Reseta os campos do formulário
  msg.textContent = "";  // Limpa a mensagem de status
});

// Alternar a visibilidade do relatório com base na seleção
const btnRelatorio = document.getElementById("btn-relatorio");
const erroRelatorio = document.getElementById("erro-relatorio");
const sucessoRelatorio = document.getElementById("sucesso-relatorio");

btnRelatorio.addEventListener("click", () => {
  const selecao = document.getElementById("selecao-relatorio").value;
  const saida = document.getElementById("saida-relatorio");

  // Limpa qualquer mensagem anterior
  erroRelatorio.textContent = "";
  sucessoRelatorio.textContent = "";

  if (!selecao) {
    // Heurística 5 (Prevenção de Erros) - Exibir mensagem de erro caso nenhum relatório seja selecionado
    erroRelatorio.textContent = "Por favor, selecione um relatório!";
    saida.innerHTML = "";  // Limpa qualquer mensagem de sucesso
  } else {
    // Heurística 1 (Visibilidade do Status do Sistema) - Relatório gerado com sucesso
    erroRelatorio.textContent = "";  // Limpa a mensagem de erro
    sucessoRelatorio.textContent = `Relatório de ${selecao} gerado com sucesso!`; // Corrigido para não incluir HTML em excesso
    saida.innerHTML = "";  // Limpa o conteúdo do relatório
  }
});
