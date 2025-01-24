// path: src/app/graphql/apollo-client.module.ts

import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { Storage } from '@ionic/storage-angular';
import { createApollo } from './apollo.config';

@NgModule({
  imports: [
    ApolloModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, Storage],
    },
  ],
})
export class ApolloClientModule {}