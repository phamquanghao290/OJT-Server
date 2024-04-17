import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { User } from './modules/user/entities/user.entity';
import { Size } from './modules/size/entities/size.entity';
import { SizeModule } from './modules/size/size.module';
import { Product } from './modules/products/entities/product.entity';
import { ProductsModule } from './modules/products/products.module';
import { Brand } from './modules/brand/entities/brand.entity';
import { BrandModule } from './modules/brand/brand.module';
import { Category } from './modules/category/entities/category.entity';
import { CategoryModule } from './modules/category/category.module';
import { Image } from './modules/image/entities/image.entity';
import { ImageModule } from './modules/image/image.module';
import { Order } from './modules/order/entities/order.entity';
import { OrderModule } from './modules/order/order.module';
import { Color } from './modules/color/entities/color.entity';
import { ColorModule } from './modules/color/color.module';
import { Address } from './modules/address/entities/address.entity';
import { AddressModule } from './modules/address/address.module';
import { FavoriteProduct } from './modules/favorite_product/entities/favorite_product.entity';
import { FavoriteProductModule } from './modules/favorite_product/favorite_product.module';
import { OrderDetail } from './modules/order-detail/entities/order-detail.entity';
import { OrderDetailModule } from './modules/order-detail/order-detail.module';
import { Cart } from './modules/cart/entities/cart.entity';
import { CartModule } from './modules/cart/cart.module';
import { ProductDetail } from './modules/product_detail/entities/product_detail.entity';
import { ProductDetailModule } from './modules/product_detail/product_detail.module';
// import { SizeColor } from './modules/size_color/entities/size_color.entity';
// import { SizeColorModule } from './modules/size_color/size_color.module';
import { AuthModule } from './modules/auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ojt-ec',
      entities: [User, Size, Product, Brand, Category, Image, Order, Color, Address, FavoriteProduct, OrderDetail, Cart, ProductDetail],
      synchronize: true,
    }), 
    UserModule,
    SizeModule, 
    ProductsModule, 
    BrandModule, 
    CategoryModule, 
    ImageModule,
    OrderModule,
    ColorModule,
    AddressModule,
    FavoriteProductModule,
    OrderDetailModule,
    CartModule,
    ProductDetailModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
