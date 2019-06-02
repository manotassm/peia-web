import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'pages/login',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },



    
    {
        path: 'students',
        loadChildren: './app-peia/student/student.module#StudentModule'
    },
    
    {
        path: 'adminpeia',
        loadChildren: './app-peia/adminpeia/adminpeia.module#AdminpeiaModule'
    },
    
    {
        path: 'admin',
        loadChildren: './app-peia/admin/admin.module#AdminModule'
    }





  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
