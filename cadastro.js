import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tmxtxwvpyrnoqpeyqyqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHR4d3ZweXJub3FwZXlxeXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkwMTQsImV4cCI6MjA2NDU3NTAxNH0.TDR9pJFn6eN4hT86WKGjpk14_lXeRPH5msGVmgFsXtI';
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('form-cadastro');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const codigo = document.getElementById('codigo').value;
  const medidas = document.getElementById('medidas').value;
  const tipo_encaixe = document.getElementById('tipo_encaixe').value;

  console.log('Dados a serem cadastrados:', { codigo, medidas, tipo_encaixe });

  const { data, error } = await supabase
    .from('codigos')
    .insert([{ codigo, medidas, tipo_encaixe }]);

  if (error) {
    console.error('Erro ao cadastrar:', error);
    mensagem.textContent = 'Erro ao cadastrar: ' + error.message;
    mensagem.style.color = 'red';
  } else {
    console.log('Cadastro realizado com sucesso:', data);
    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';
    form.reset();
  }
});
