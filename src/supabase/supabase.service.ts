import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY,
    );
  }

  // Exemplo de método para buscar dados
  async getAllEntries() {
    const { data, error } = await this.supabaseClient
      .from('entries')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  // Adicione outros métodos conforme necessário
}
