import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserGateway } from './domain/models/user/gateways/user.gateway';
import { UserAdapterService } from './infrastructure/driven-adapters/user-adapter/user-adapter.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
    {provide: UserGateway, useClass: UserAdapterService},
    provideRouter(routes), provideStore(), provideEffects()]
};
