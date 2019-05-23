import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        loadChildren: "./components/admin/admin.module#AdminModule"
    },
    {
        path: "store",
        loadChildren: "./components/store/store.module#StoreModule"
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
