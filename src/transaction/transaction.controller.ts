import { Body, Controller, Post, Get, Query, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from '@prisma/client';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async signupUser(@Body() transactionData: Transaction): Promise<Transaction> {
    return this.transactionService.createTransaction(transactionData);
  }
  @Get()
  findAll(@Query() query: any) {
    return this.transactionService.getAllTransactions({ where: query });
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.getUniqueTransaction({ id: Number(id) });
  }
}
