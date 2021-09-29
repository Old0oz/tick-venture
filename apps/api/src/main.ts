/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* const options = new DocumentBuilder()
    .setTitle('Lead API')
    .setDescription('The lead API description')
    .setVersion('1.0')
    .addTag('lead')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document); */

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
