import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLink } from './enums/pageLink';

const routes: Routes = [
    {
        path: PageLink.base,
        loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: PageLink.store,
        loadChildren: () => import('./components/store/store.module').then(m => m.StoreModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
