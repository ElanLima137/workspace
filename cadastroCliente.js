import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tmxtxwvpyrnoqpeyqyqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHR4d3ZweXJub3FwZXlxeXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkwMTQsImV4cCI6MjA2NDU3NTAxNH0.TDR9pJFn6eN4hT86WKGjpk14_lXeRPH5msGVmgFsXtI'; // chave encurtada por segurança
const supabase = createClient(supabaseUrl, supabaseKey);

const formC = document.getElementById('form-cadastroC');
const mensagemcliente = document.getElementById('mensagemcliente');

formC.addEventListener('submit', async (e) => {
  e.preventDefault();

  const numero = document.getElementById('numero').value.trim();
  const cliente = document.getElementById('cliente').value.trim();
  const entrega = document.getElementById('entrega').value.trim();  
  const endereco = document.getElementById('endereco').value.trim();

  // Verifica se o número já existe
  const { data: clienteExistente, error: erroVerificacao } = await supabase
    .from('clientes')
    .select('id') // ou outro campo, apenas para verificar existência
    .eq('numero', numero)
    .maybeSingle();

  if (erroVerificacao) {
    console.error('Erro ao verificar cliente existente:', erroVerificacao);
    mensagemcliente.textContent = 'Erro ao verificar duplicidade.';
    mensagemcliente.style.color = 'red';
    return;
  }

  if (clienteExistente) {
    mensagemcliente.textContent = 'Já existe um cliente com esse número!';
    mensagemcliente.style.color = 'orange';
    return;
  }

  // Se não existe, então cadastra
  const { data, error } = await supabase
    .from('clientes')
    .insert([{ numero, cliente, entrega, endereco }]);

  if (error) {
    console.error('Erro ao cadastrar:', error);
    mensagemcliente.textContent = 'Erro ao cadastrar: ' + error.message;
    mensagemcliente.style.color = 'red';
  } else {
    console.log('Cadastro realizado com sucesso:', data);
    mensagemcliente.textContent = 'Cadastro realizado com sucesso!';
    mensagemcliente.style.color = 'green';
    formC.reset();
  }
});
