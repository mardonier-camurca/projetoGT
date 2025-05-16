// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dryvcixwotlnctzdktmb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeXZjaXh3b3RsbmN0emRrdG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDA4MDksImV4cCI6MjA2Mjk3NjgwOX0.5Pb2R0A_QUclJ4WEYEdvbhgM95RK9XJDoBaz8wiMcbI';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getCartItems() {
  const { data, error } = await supabase.from('cart').select('*');
  if (error) {
    console.error('Erro ao buscar carrinho:', error);
    return [];
  }
  return data;
}
