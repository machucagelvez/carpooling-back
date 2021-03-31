import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger;

  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true //Esto hace que solo se usen los campos que se validan
    })
)

  await app.listen(3000);
  logger.log(`Server is running in ${await app.getUrl()}`)
}
bootstrap();
