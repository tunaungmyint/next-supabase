import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://trmprjqnrxlmruliohfp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRybXByanFucnhsbXJ1bGlvaGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIxODEwNjYsImV4cCI6MTk3Nzc1NzA2Nn0.9sY3RXT_GGLXW3ZmI98q8Kdvhp4ogDKlyLz-BIGLLlI'
);

export default supabase;
