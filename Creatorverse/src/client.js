import { createClient } from '@supabase/supabase-js';

const URL = 'https://nzptmzqkcrwaqjohvsjs.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHRtenFrY3J3YXFqb2h2c2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0MTYzODMsImV4cCI6MjAwNzk5MjM4M30.pUiSeEOUnbU32YZY-QhrRDtYOpe-NOGJtLb0dbwWxEo';
const supabase = createClient(URL, API_KEY);

export default supabase;
