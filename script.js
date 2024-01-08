// Função para exibir o conteúdo da aba selecionada
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
  }

  const tabs = document.getElementsByClassName('tablink');
  for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

// Função para exibir o conteúdo da aba aninhada selecionada
function openNestedTab(evt, nestedTabName) {
  const nestedTabContents = document.getElementsByClassName('nestedtabcontent');
  for (let i = 0; i < nestedTabContents.length; i++) {
      nestedTabContents[i].style.display = 'none';
  }

  const nestedTabs = document.getElementsByClassName('nestedtablink');
  for (let i = 0; i < nestedTabs.length; i++) {
      nestedTabs[i].classList.remove('active');
  }

  document.getElementById(nestedTabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

// Função para abrir um modal específico
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('active');
}

// Função para fechar todos os modais
function closeModal() {
  const modais = document.getElementsByClassName('modal');
  for (let i = 0; i < modais.length; i++) {
      modais[i].classList.remove('active');
  }
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
  const modais = document.getElementsByClassName('modal');
  for (let i = 0; i < modais.length; i++) {
      if (event.target === modais[i]) {
          modais[i].classList.remove('active');
      }
  }
}

// Função para salvar configurações de segurança
function saveSecuritySettings() {
  const politicaSenha = document.getElementById('politicaSenha').value;
  const configuracoesLogin = document.getElementById('configuracoesLogin').value;

  // Aqui você pode implementar a lógica para salvar as configurações no backend ou em local storage
  console.log('Política de senha:', politicaSenha);
  console.log('Configurações de login:', configuracoesLogin);

  alert('Configurações de segurança salvas com sucesso!');
}

// Função para abrir a aba de fornecedores
function openSuppliersTab() {
  closeOtherTabs(); // Fecha outras abas
  document.getElementById('fornecedores').style.display = 'block';
}

// Função para fechar outras abas
function closeOtherTabs() {
  const tabs = document.getElementsByClassName('nestedtabcontent');
  for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
  }
}

// Função para fechar a aba de fornecedores ao abrir outras abas
function openTab(event, tabName) {
  closeOtherTabs();
  if (tabName !== 'fornecedores') {
      document.getElementById('fornecedores').style.display = 'none';
  }

  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
  }

  document.getElementById(tabName).style.display = 'block';
  const tablinks = document.getElementsByClassName('tablink');
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
  }
  event.currentTarget.classList.add('active');
}

// Função para abrir a aba de clientes
function openClientsTab() {
  closeOtherTabs(); // Fecha outras abas
  document.getElementById('clientes').style.display = 'block';
}

// Função para fechar outras abas
function closeOtherTabs() {
  const tabs = document.getElementsByClassName('nestedtabcontent');
  for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
  }
}

// Função para exibir o conteúdo da aba selecionada
function openFinanceNestedTab(evt, tabName) {
  // Oculta todos os conteúdos das abas de finanças
  let tabContents = document.querySelectorAll('#financeiro .nestedtabcontent');
  tabContents.forEach(tab => tab.style.display = 'none');

  // Remove a classe 'active' de todos os botões de abas
  let tabLinks = document.querySelectorAll('#financeiro .nestedtablink');
  tabLinks.forEach(link => link.classList.remove('active'));

  // Exibe o conteúdo da aba selecionada
  document.getElementById(tabName).style.display = 'block';
  // Adiciona a classe 'active' ao botão da aba selecionada
  evt.currentTarget.classList.add('active');
}
function registrarDespesa() {
  // Obtendo os valores dos campos de entrada
  let descricao = document.getElementById('descricaoDespesa').value;
  let valor = parseFloat(document.getElementById('valorDespesa').value);
  let data = document.getElementById('dataDespesa').value;

  // Validando se o valor é um número válido
  if (isNaN(valor) || valor <= 0) {
      alert('Insira um valor válido para a despesa.');
      return;
  }

  // Aqui você pode fazer o processamento para registrar a despesa
  // Por exemplo, enviar os dados para um backend ou adicionar a uma lista de despesas
  
  // Exemplo de ação: exibir os dados no console
  console.log(`Despesa registrada: Descrição - ${descricao}, Valor - ${valor}, Data - ${data}`);
  
  // Limpar os campos após o registro
  limparCamposDespesa();
}

function limparCamposDespesa() {
  document.getElementById('descricaoDespesa').value = '';
  document.getElementById('valorDespesa').value = '';
  document.getElementById('dataDespesa').value = '';
}

function registrarReceita() {
  // Obtendo os valores dos campos de entrada
  let descricao = document.getElementById('descricaoReceita').value;
  let valor = parseFloat(document.getElementById('valorReceita').value);
  let data = document.getElementById('dataReceita').value;

  // Validando se o valor é um número válido
  if (isNaN(valor) || valor <= 0) {
      alert('Insira um valor válido para a receita.');
      return;
  }

  // Aqui você pode fazer o processamento para registrar a receita
  // Por exemplo, enviar os dados para um backend ou adicionar a uma lista de receitas
  
  // Exemplo de ação: exibir os dados no console
  console.log(`Receita registrada: Descrição - ${descricao}, Valor - ${valor}, Data - ${data}`);
  
  // Limpar os campos após o registro
  limparCamposReceita();
}

function limparCamposReceita() {
  document.getElementById('descricaoReceita').value = '';
  document.getElementById('valorReceita').value = '';
  document.getElementById('dataReceita').value = '';
}

let saldoInicial = 1000; // Saldo inicial
const despesas = [100, 150, 200]; // Valores negativos representando despesas
const receitas = [300, 400, 500]; // Valores positivos representando receitas

// Função para calcular o saldo atual com base no saldo inicial e operações
function calcularSaldoAtual() {
    // Calculando o total de despesas
    const totalDespesas = despesas.reduce((total, despesa) => total + despesa, 0);

    // Calculando o total de receitas
    const totalReceitas = receitas.reduce((total, receita) => total + receita, 0);

    // Calculando o saldo atual
    const saldoAtual = saldoInicial + totalReceitas + totalDespesas;

    return saldoAtual;
}

// Chamando a função e exibindo o resultado
const saldoAtual = calcularSaldoAtual();
console.log(`O saldo atual é: ${saldoAtual}`);


function gerarRelatorioFinanceiro() {
    const totalDespesas = despesas.reduce((total, despesa) => total + despesa, 0);
    const totalReceitas = receitas.reduce((total, receita) => total + receita, 0);
    const saldoAtual = saldoInicial + totalReceitas - totalDespesas;

    return {
        totalDespesas,
        totalReceitas,
        saldoAtual
    };
}

// Chamando a função para gerar o relatório
const relatorio = gerarRelatorioFinanceiro();
console.log('Relatório Financeiro:');
console.log('Total de Despesas:', relatorio.totalDespesas);
console.log('Total de Receitas:', relatorio.totalReceitas);
console.log('Saldo Atual:', relatorio.saldoAtual);

// Funções para a aba de faturamento e pagamentos

function processarFaturas() {
  faturas.forEach(fatura => {
      if (fatura.status === 'pendente') {
          fatura.status = 'processada';
          registrarFaturaProcessada(fatura.id); // Chamada da função para registrar a fatura processada
          console.log(`Fatura ID ${fatura.id} processada.`);
      }
  });
}

function registrarFaturaProcessada(id) {
  // Simulação de registro da fatura processada
  console.log(`Fatura ID ${id} registrada como processada no sistema.`);
}

// Suponha que você tenha uma lista de pagamentos
let pagamentos = [];

function registrarPagamento(descricao, valor, data) {
    // Cria um objeto representando um pagamento
    const novoPagamento = {
        id: pagamentos.length + 1,
        descricao: descricao,
        valor: parseFloat(valor),
        data: data,
        status: 'pendente' // Você pode definir um status inicial para o pagamento
    };

    // Adiciona o novo pagamento à lista de pagamentos
    pagamentos.push(novoPagamento);
    console.log('Pagamento registrado:', novoPagamento);
    return novoPagamento; // Retorna o pagamento registrado, se necessário
}

// Exemplo de chamada da função para registrar um pagamento
registrarPagamento('Pagamento mensalidade', '150.00', '2023-12-31');


function mostrarSaldos() {
  // Lógica para mostrar os saldos
  // Implemente a lógica para exibir os saldos aqui
  console.log('Mostrando saldos...');
}

function registrarNotaFiscal() {
  const numNotaFiscal = document.getElementById('numNotaFiscal').value;
  const dataNotaFiscal = document.getElementById('dataNotaFiscal').value;
  const fornecedor = document.getElementById('fornecedor').value;
  const detalhesNotaFiscal = document.getElementById('detalhesNotaFiscal').value;

  const produtosNotaFiscal = [];
  const produtos = document.querySelectorAll('.produto');
  produtos.forEach(produto => {
      const nome = produto.querySelector('.nomeProduto').value;
      const quantidade = parseInt(produto.querySelector('.quantidadeProduto').value);
      // Coletar outros detalhes dos produtos conforme necessário
      // Exemplo: const preco = produto.querySelector('.precoProduto').value;

      produtosNotaFiscal.push({ nome, quantidade /*, preco */ });
  });

  // Utilize os dados coletados para atualizar o estoque ou outras operações necessárias

  alert('Nota fiscal registrada. Estoque atualizado.');
}

function registrarVenda() {
  const cliente = document.getElementById('clienteVenda').value;
  const produto = document.getElementById('produtoVenda').value;
  const quantidade = parseInt(document.getElementById('quantidadeVenda').value);
  const valor = parseFloat(document.getElementById('valorVenda').value);

  // Aqui você pode utilizar os dados da venda para atualizar registros ou relatórios

  alert('Venda registrada com sucesso.');
}

// Adicione um array de meses e vendas simuladas para cada mês
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
const vendas = [20, 35, 50, 25, 40, 60];

// Configurar o gráfico de barras
const ctx = document.getElementById('graficoVendas').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [{
            label: 'Vendas por mês',
            data: vendas,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

