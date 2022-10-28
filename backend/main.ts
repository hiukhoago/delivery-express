import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
var cors = require('cors')


require('dotenv').config()

async function bootstrap() {

  const logger = new Logger('bootstrap')

  const port = process.env.PORT || '8080'
  logger.log(
    "\n--------------------------------------------------------------------------------" +
    "\nBACKEND SERVER IS RUNNING AT http://localhost:" + port +
    "\n--------------------------------------------------------------------------------"
  )
  const app: INestApplication = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe());


  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,           
    optionSuccessStatus: 200
  }));

  app.enableCors({
    allowedHeaders: "*",
    origin: "*"
  });


  app.setGlobalPrefix('/api')
  app.use(cookieParser());


  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  

  await app.listen(Number.parseInt(port))
  console.log(port)

}
bootstrap();
