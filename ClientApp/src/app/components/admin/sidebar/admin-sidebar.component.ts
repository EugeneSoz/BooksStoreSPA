import { Component, OnInit } from '@angular/core';
import { PageLink } from '../../../enums/pageLink';
import { AdminSidebarSection } from '../../../models/adminSidebarSection';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {
    sections: Array<AdminSidebarSection>;

    ngOnInit() {
        this.sections = new Array<AdminSidebarSection>();
        this.sections.push(new AdminSidebarSection(`/${PageLink.admin_services}`, "Работа с бд"));
        this.sections.push(new AdminSidebarSection(`/${PageLink.admin_books}`, "Книги"));
        this.sections.push(new AdminSidebarSection(`/${PageLink.admin_categories}`, "Категории"));
        this.sections.push(new AdminSidebarSection(`/${PageLink.admin_publishers}`, "Издатели"));
        this.sections.push(new AdminSidebarSection(`/${PageLink.admin_orders}`, "Заказы"));
        this.sections.push(new AdminSidebarSection(`/${PageLink.store}`, "Магазин"));
    }
}
