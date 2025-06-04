import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://tmxtxwvpyrnoqpeyqyqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHR4d3ZweXJub3FwZXlxeXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkwMTQsImV4cCI6MjA2NDU3NTAxNH0.TDR9pJFn6eN4hT86WKGjpk14_lXeRPH5msGVmgFsXtI'; // substitua pela sua chave pública
const supabase = createClient(supabaseUrl, supabaseKey);

window.consultarProduto = async function () {
  const codigo = document.getElementById('codigoConsulta').value.trim();
  const resultado = document.getElementById('resultado');

  if (!codigo) {
    resultado.innerHTML = '<p class="erro">Por favor, digite um código.</p>';
    return;
  }

  const { data, error } = await supabase
    .from('codigos')
    .select('*')
    .eq('codigo', codigo)
    .single();

  if (error || !data) {
    resultado.innerHTML = `<p class="erro">Produto não encontrado ou erro: ${error?.message || 'não encontrado'}</p>`;
  } else {
    resultado.innerHTML = `
      <strong>Código:</strong> ${data.codigo}<br>
      <strong>Medidas:</strong> ${data.medidas}<br>
      <strong>Tipo de Encaixe:</strong> ${data.tipo_encaixe}
    `;
  }
};
