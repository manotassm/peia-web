import { Routes } from '@angular/router';
import { AdminpeiaComponent } from './adminpeia.component';

export const AdminpeiaRoutes: Routes = [
    {
        path: '',
        children: [ 
            {
                path: '',
                component: AdminpeiaComponent
            }
        ]
    }
];
