import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NcursoComponent } from '../../Cursos/ncurso/ncurso.component';
import { ListarcursoComponent } from '../../Cursos/listarcurso/listarcurso.component';
import { EditcursoComponent } from '../../Cursos/editcurso/editcurso.component';
import { NewcurseComponent } from '../../Cursos/newcurse/newcurse.component';
import { NstudentComponent } from '../../Estudiantes/nstudent/nstudent.component';
import { EditstudentComponent } from '../../Estudiantes/editstudent/editstudent.component';
import { ListstudentComponent } from '../../Estudiantes/liststudent/liststudent.component';
import { NewstudentComponent } from '../../Estudiantes/newstudent/newstudent.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'ncurso', component: NcursoComponent, children: [
            { path: 'list', component: ListarcursoComponent },
            { path: 'edit/:id', component: EditcursoComponent },
            { path: 'new', component: NewcurseComponent }
        ]
    },

    { path: 'nstudent', component: NstudentComponent, children: [
            { path: 'list', component: ListstudentComponent },
            { path: 'edit/:id', component: EditstudentComponent },
            { path: 'new', component: NewstudentComponent }
        ]
    },

    /*{ path: 'ncurso',        component: NcursoComponent },
    { path: 'cursolist',        component: ListarcursoComponent },
    { path: 'cursoedit',        component: EditcursoComponent },*/
];
