import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zkpiivzcbhzyzttgtzlw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcGlpdnpjYmh6eXp0dGd0emx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1NzI1MDgsImV4cCI6MjA4NDE0ODUwOH0.NWY88XPaRqU0hNFVRPTa5qyg-nRihwYFl0FDk4j-8pk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
