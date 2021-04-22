import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://dmor:q2uToXs8PmgACXyf@cluster0.ygnxu.mongodb.net/nest-js?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
