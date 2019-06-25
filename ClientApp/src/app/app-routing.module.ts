import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLink } from './models/enums/page-link.enum';

const routes: Routes = [
    {
        path: PageLink.base,
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: PageLink.store,
        loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
