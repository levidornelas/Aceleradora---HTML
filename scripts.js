function adicionarTarefa(periodo) {
    let entradaTarefa;
    let listaTarefas;


    // Escolhendo o período em que a tarefa será adicionada
    if (periodo === 'dia') {
        entradaTarefa = document.getElementById('nova-tarefa-dia');
        listaTarefas = document.getElementById('tarefas-dia');
    } else {
        entradaTarefa = document.getElementById('nova-tarefa-noite');
        listaTarefas = document.getElementById('tarefas-noite');
    }

    if (entradaTarefa.value.trim() !== "") {
        let novaTarefa = document.createElement('li');
        novaTarefa.className = 'tarefa-item';

        let spanTarefa = document.createElement('span');
        spanTarefa.textContent = entradaTarefa.value;

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.className = 'btn-remover';
        botaoRemover.onclick = function() {
            removerTarefa(this);
        };

        novaTarefa.appendChild(spanTarefa);
        novaTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(novaTarefa);
        entradaTarefa.value = '';
    }
}

// Função para remover as tarefas da lista:
function removerTarefa(botao) {
    let tarefa = botao.parentElement;
    tarefa.remove();
}

document.getElementById('nova-tarefa-dia').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa('dia');
    }
});

document.getElementById('nova-tarefa-noite').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa('noite');
    }
});
