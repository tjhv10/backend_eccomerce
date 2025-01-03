// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ItemModule } from './item/items.module';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { CatergoyModule } from './category/categories.module';
// import { ItemCategoriesModule } from './Item_Category/ItemCategory.module';
// import { Category } from './category/categories.entity';
// import { ItemsCategories } from './Item_Category/ItemCategory.entity';
// import { ConfigModule } from '@nestjs/config';
// import { DataloaderModule } from './dataloader/dataloader.module';
// import { DataloaderService } from './dataloader/dataloader.service';
// import { Items } from './item/items.entity';

// @Module({
//   imports: [
//     ConfigModule.forRoot({ envFilePath: '.env' }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       //   host: process.env.DB_HOST,
//       //   port: parseInt(process.env.DB_PORT),
//       //   username: process.env.DB_USERNAME,
//       //   password: '02082003',
//       //   database: process.env.DB_DATABASE,
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '02082003',
//       database: 'Items',
//       autoLoadEntities: true,
//       synchronize: true,
//       entities: [Items, Category, ItemsCategories],
//     }),
//     GraphQLModule.forRootAsync<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       imports: [DataloaderModule],
//       useFactory: (dataloaderService: DataloaderService) => {
//         return {
//           autoSchemaFile: true,
//           context: () => ({
//             loaders: dataloaderService.getLoaders(),
//           }),
//         };
//       },
//       inject: [DataloaderService],
//     }),
//     ItemModule,
//     CatergoyModule,
//     ItemCategoriesModule,
//     DataloaderModule,
//   ],
// })
// export class AppModule {}

// // import { Module } from '@nestjs/common';
// // import { TypeOrmModule } from '@nestjs/typeorm';
// // import { ItemsCategories } from './Item_Category/ItemCategory.entity';
// // import { Items } from './item/items.entity';
// // import { ItemModule } from './item/items.module';
// // import { ItemCategoriesModule } from './Item_Category/ItemCategory.module';

// // @Module({
// //   imports: [
// //     TypeOrmModule.forRoot({
// //       type: 'postgres',
// //       host: 'localhost',
// //       port: 5432,
// //       username: 'postgres',
// //       password: '02082003',
// //       database: 'Items',
// //       entities: [Items, ItemsCategories],
// //       synchronize: true,
// //     }),
// //     ItemModule,
// //     ItemCategoriesModule,
// //   ],
// // })
// // export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './item/items.module';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { CatergoyModule } from './category/categories.module';
import { ItemCategoriesModule } from './Item_Category/ItemCategory.module';
import { ConfigModule } from '@nestjs/config';
import { DataloaderModule } from './dataloader/dataloader.module';
import { DataloaderService } from './dataloader/dataloader.service';
import { Items } from './item/items.entity';
import { Category } from './category/categories.entity';
import { ItemsCategories } from './Item_Category/ItemCategory.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '02082003',
      database: 'Items',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Items, Category, ItemsCategories],
    }),
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      imports: [DataloaderModule],
      useFactory: (dataloaderService: DataloaderService) => {
        return {
          autoSchemaFile: {
            federation: 2,
          },
          context: () => ({
            loaders: dataloaderService.getLoaders(),
          }),
        };
      },
      inject: [DataloaderService],
    }),
    ItemModule,
    CatergoyModule,
    ItemCategoriesModule,
    DataloaderModule,
  ],
})
export class AppModule {}
