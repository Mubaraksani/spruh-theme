import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { RedirectAuthGuard } from '../guard/redirect-auth.guard';
import { Role } from '../modals/role';
//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [
    // { path : ''  , redirectTo : '', pathMatch: 'full' , canActivate : [ RedirectGuardService ] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', },
    // Without Authentication comment canActivate: [AuthGuard],

    {
        path: '',
        loadChildren: () => import('../../components/admin/dashboard.module').then(m => m.DashboardModule),
        canActivate:[AuthGuard],
        data : {
            //   role: [Role.superAdmin, Role.subAdmin],
        }
    },
    {
        path: 'advanced-ui',
        loadChildren: () => import('../../components/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
    },
    {
        path: 'apps',
        loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
    },
    {
        path: 'crypto',
        loadChildren: () => import('../../components/crypto/crypto.module').then(m => m.CryptoModule)
    },
    {
        path: 'ecommerce',
        loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
    },
    {
        path: 'elements',
        loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('../../components/forms/form.module').then(m => m.FormModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'utilities',
        loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    },
    {
        path: 'custom-error',
        loadChildren: () => import('../../components/custom/custom.module').then(m => m.CustomModule)
    },
    
]


