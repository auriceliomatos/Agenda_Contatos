 
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Capturar os valores inseridos pelo usuário

    const nomeUser = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Criar uma nova linha na tabela
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Criar células para o nome e telefone
    const nameCell = newRow.insertCell(0);
    const telefoneCell = newRow.insertCell(1);

    // Preencher as células com os valores inseridos
    nameCell.textContent = nomeUser;
    telefoneCell.textContent = telefone;

    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';

})
