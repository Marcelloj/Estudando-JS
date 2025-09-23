
const inputTarefa = document.getElementById("input-nova-tarefa");
const btnAdicionar  = document.getElementById("btn-adicionar");
const listaTarefas  = document.getElementById("lista-de-tarefas");

btnAdicionar.addEventListener("click", function() {
  // Pega o texto que o usuário digitou
  const textoDigitado = inputTarefa.value;

  // --- A MÁGICA ACONTECE AQUI ---

  // 1. Cria um novo elemento <li> em branco
  const novoItemDaLista = document.createElement("li");

  // 2. Coloca o texto digitado como conteúdo do <li>
  novoItemDaLista.textContent = textoDigitado;

  // 3. Adiciona o <li> já preenchido na nossa <ul> (a listaTarefas)
  listaTarefas.appendChild(novoItemDaLista);

  // Bônus: Limpa o campo de texto para a próxima tarefa
  inputTarefa.value = "";
});