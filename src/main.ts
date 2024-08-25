import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { map } from 'rxjs/operators';
function jsonBigIntReplacer(key, value) {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  return value;
}
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalInterceptors({
    intercept(context, next) {
      return next.handle().pipe(
        map((data) => {
          return JSON.parse(JSON.stringify(data, jsonBigIntReplacer));
        }),
      );
    },
  });
  await app.listen(3001);
}
bootstrap();
