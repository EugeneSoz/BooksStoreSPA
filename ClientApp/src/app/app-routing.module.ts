import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: "store",
        loadChildren: () => import('./components/store/store.module').then(m => m.StoreModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
