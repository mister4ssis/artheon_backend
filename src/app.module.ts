import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './user/user.module';
import { SupabaseModule } from './supabase/supabase.module';
import { SupabaseService } from './supabase/supabase.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports: [CategoriesModule, UserModule, SupabaseModule, PrismaModule],
  controllers: [AppController, TransactionController],
  providers: [AppService, SupabaseService, PrismaService, TransactionService],
})
export class AppModule {}
