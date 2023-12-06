import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'notifications',
                loadChildren: () => import('./notification/notification.module').then((m) => m.NotificationModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./manage-users/manage-users.module').then((m) => m.ManageUsersModule)
            }
        ],
    },
    

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
