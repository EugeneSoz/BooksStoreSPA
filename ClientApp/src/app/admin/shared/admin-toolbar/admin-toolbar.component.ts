import { Component, Input } from "@angular/core";

@Component({
    selector: 'bs-admin-toolbar',
    templateUrl: './admin-toolbar.component.html',
})
export class AdminToolbarComponent {
    @Input() isButtonsVisible: boolean = false;
    @Input() link: string = "";

    isCollapsed: boolean = true;
}
