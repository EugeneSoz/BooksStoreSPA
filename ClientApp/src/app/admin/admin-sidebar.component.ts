import { Component, OnInit } from '@angular/core';

import { AdminSidebarSection } from '../models/components/admin-sidebar-section.model';
import { PageLink } from '../models/enums/page-link.enum';

@Component({
    selector: 'bs-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {
    sections: Array<AdminSidebarSection>;

    ngOnInit() {
        let baseUrl: string = PageLink.admin;
        this.sections = new Array<AdminSidebarSection>();
        this.sections.push(new AdminSidebarSection(`/${baseUrl}`, "Работа с бд"));
        this.sections.push(new AdminSidebarSection(`/${baseUrl}/${PageLink.admin_books}`, "Книги"));
        this.sections.push(new AdminSidebarSection(`/${baseUrl}/${PageLink.admin_categories}`, "Категории"));
        this.sections.push(new AdminSidebarSection(`/${baseUrl}/${PageLink.admin_publishers}`, "Издатели"));
        this.sections.push(new AdminSidebarSection(`/${baseUrl}/${PageLink.admin_orders}`, "Заказы"));
        this.sections.push(new AdminSidebarSection(`/${PageLink.store}`, "Магазин"));
    }
}
