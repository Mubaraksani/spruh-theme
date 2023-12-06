import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const landing_Routes: Routes = [
    {
        path: 'landing-page',
        loadChildren: () => import('../../components/landingpage/landingpage.module').then(m => m.LandingpageModule)
    },
]

