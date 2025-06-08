import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tmxtxwvpyrnoqpeyqyqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHR4d3ZweXJub3FwZXlxeXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkwMTQsImV4cCI6MjA2NDU3NTAxNH0.TDR9pJFn6eN4hT86WKGjpk14_lXeRPH5msGVmgFsXtI';
const supabase = createClient(supabaseUrl, supabaseKey);

const formC = document.getElementById('form-cadastroC');
const mensagem = document.getElementById('mensagem');

formC.addEventListener('submit', async (e) => {
  e.preventDefault();

  const numero = document.getElementById('numero').value;
  const cliente = document.getElementById('cliente').value;
  const entrega = document.getElementById('entrega').value;  
  const endereco = document.getElementById('endereco').value;

  console.log('Dados a serem cadastrados:', { numero, cliente, entrega, endereco });

  const { data, error } = await supabase
    .from('clientes')
    .insert([{ numero, cliente, entrega, endereco }]);

  if (error) {
    console.error('Erro ao cadastrar:', error);
    mensagem.textContent = 'Erro ao cadastrar: ' + error.message;
    mensagem.style.color = 'red';
  } else {
    console.log('Cadastro realizado com sucesso:', data);
    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';
    formC.reset();
  }
});
