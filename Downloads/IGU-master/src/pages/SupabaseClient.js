import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wwcbzpqlwqiojdnspqoi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3Y2J6cHFsd3Fpb2pkbnNwcW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczOTE0ODcsImV4cCI6MjAwMjk2NzQ4N30.T_Q4YEban81qq0nsge4ud2JliBiMxEgw2Zsj2JsYR40'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)