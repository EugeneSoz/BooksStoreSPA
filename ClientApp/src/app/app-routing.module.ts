import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbServicesComponent } from './components/admin/dbServices.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout.component';
import { BooksSelectionComponent } from './components/admin/books/books-selection.component';
import { CategoriesSelectionComponent } from './components/admin/categories/categories-selection.component';
import { PublishersSelectionComponent } from './components/admin/publishers/publishers-selection.component';
import { MainComponent } from './components/store/main.component';

const routes: Routes = [
    {
        path: "", component: AdminLayoutComponent,
        children: [
            { path: "", component: DbServicesComponent },
            { path: "admin/books", component: BooksSelectionComponent },
            { path: "admin/categories", component: CategoriesSelectionComponent },
            { path: "admin/publishers", component: PublishersSelectionComponent },
        ],
    },
    { path: "store", component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
