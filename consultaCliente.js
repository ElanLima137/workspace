import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tmxtxwvpyrnoqpeyqyqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHR4d3ZweXJub3FwZXlxeXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkwMTQsImV4cCI6MjA2NDU3NTAxNH0.TDR9pJFn6eN4hT86WKGjpk14_lXeRPH5msGVmgFsXtI';
const supabase = createClient(supabaseUrl, supabaseKey);

window.consultarClienteCadastrado = async function () {
  const cliente = document.getElementById('clienteConsulta').value.trim();
  const resultadocliente = document.getElementById('resultadocliente');

  if (!cliente) {
    resultadocliente.innerHTML = '<p class="erro">Por favor, digite um número de telefone.</p>';
    return;
  }

  const { data, error } = await supabase
    .from('clientes')
    .select('*')
    .eq('numero', cliente)
    .single();

  if (error || !data) {
    resultadocliente.innerHTML = `<p class="erro">Cliente não cadastrado: ${error?.message || 'não encontrado'}</p>`;
  } else {
    resultadocliente.innerHTML = `
      <strong>Nome:</strong> ${data.cliente}<br>
      <strong>Endereço:</strong> ${data.endereco}<br>
      <strong>Tipo de entrega:</strong> ${data.entrega}<br>
      <strong>Número de telefone:</strong> ${data.numero}
    `;
  }
};
