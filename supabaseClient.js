import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tmxtxwvpyrnoqpeyqyqx.supabase.co'; // substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHR4d3ZweXJub3FwZXlxeXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkwMTQsImV4cCI6MjA2NDU3NTAxNH0.TDR9pJFn6eN4hT86WKGjpk14_lXeRPH5msGVmgFsXtI'; // substitua pela sua chave 

export const supabase = createClient(supabaseUrl, supabaseKey);