import { Routes } from '@angular/router';
import { StudentComponent } from './student.component';

export const StudentRoutes: Routes = [
    {
        path: '',
        children: [ 
            {
                path: '',
                component: StudentComponent
            }
        ]
    }
];
