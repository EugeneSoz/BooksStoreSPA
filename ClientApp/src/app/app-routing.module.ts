import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/shared/admin.component';
import { DbServicesComponent } from './components/admin/dbServices.component';

const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
            { path: "", component: DbServicesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
