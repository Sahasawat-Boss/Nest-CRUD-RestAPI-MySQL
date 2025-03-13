import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttractionModule } from './attraction/attraction.module';
import { Attraction } from './attraction/entities/attraction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'mynestjsdb',
      entities: [Attraction],
      synchronize: true,
    }),
    AttractionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
