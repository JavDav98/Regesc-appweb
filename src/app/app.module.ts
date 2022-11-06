import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF, DatePipe} from '@angular/common'

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import localePy from '@angular/common/locales/es-GQ'
import {registerLocaleData} from "@angular/common";
import {AdminLayoutRoutes} from "./layouts/admin-layout/admin-layout.routing";
registerLocaleData(localePy, 'es-GT');

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'RegescKeycloak',
          clientId: 'regesc-webapp'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html'
        }
      });
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AdminLayoutRoutes, {useHash: false}),
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [
    DatePipe,
    {provide: LOCALE_ID, useValue: 'es-GT'},
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
