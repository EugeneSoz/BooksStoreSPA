import { Component, OnInit } from '@angular/core';
import { AdminSidebarSection } from '../../viewModels/adminSidebarSection';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {
    sections: Array<AdminSidebarSection>;

    ngOnInit() {
        this.sections = new Array<AdminSidebarSection>();
        this.sections.push(new AdminSidebarSection("/admin/services", "Работа с бд"));
        this.sections.push(new AdminSidebarSection("/admin/books", "Книги"));
        this.sections.push(new AdminSidebarSection("/admin/categories", "Категории"));
        this.sections.push(new AdminSidebarSection("/admin/publishers", "Издатели"));
        this.sections.push(new AdminSidebarSection("/admin/orders", "Заказы"));
        this.sections.push(new AdminSidebarSection("/store", "Магазин"));
    }

}
