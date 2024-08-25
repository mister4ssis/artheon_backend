import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

import * as bcrypt from 'bcrypt';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() userData: User): Promise<User> {
    // Define o número de salt rounds. Quanto maior, mais seguro, mas mais lento.
    const saltRounds = 10;

    // Cria o hash da senha com salt.
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    return this.userService.createUser({
      ...userData,
      password: hashedPassword,
    });
  }

  @Get()
  findAll(@Query() query: any) {
    return this.userService.users({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.user({ id: Number(id) });
  }
}
