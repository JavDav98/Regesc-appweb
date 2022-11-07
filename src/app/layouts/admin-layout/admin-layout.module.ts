import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NcursoComponent } from '../../Cursos/ncurso/ncurso.component';
import { NewcurseComponent } from '../../Cursos/newcurse/newcurse.component'
import { ListarcursoComponent } from '../../Cursos/listarcurso/listarcurso.component';
import { EditcursoComponent } from '../../Cursos/editcurso/editcurso.component';
import { NstudentComponent } from '../../Estudiantes/nstudent/nstudent.component';
import { EditstudentComponent } from '../../Estudiantes/editstudent/editstudent.component';
import { ListstudentComponent } from '../../Estudiantes/liststudent/liststudent.component';
import { NewstudentComponent } from '../../Estudiantes/newstudent/newstudent.component';
import {CursosService} from "../../Services/cursos.service";
import {AuthModule} from "../../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    AuthModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NcursoComponent,
    ListarcursoComponent,
    EditcursoComponent,
    NewcurseComponent,
    NewstudentComponent,
    ListstudentComponent,
    NstudentComponent,
    EditstudentComponent
  ],
  providers: [
      CursosService
  ]
})

export class AdminLayoutModule {}
