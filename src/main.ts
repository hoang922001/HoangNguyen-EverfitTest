import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestConfig } from './common/config/config.interface';
import { TransformationInterceptor } from './common/interceptor/transformation.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new TransformationInterceptor());

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const port = process.env.PORT ?? nestConfig?.port ?? 8080;
  app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
  });
}
bootstrap();
