import { Component, Input } from "@angular/core";

@Component({
    selector: 'admin-toolbar',
    templateUrl: './admin-toolbar.component.html',
})
export class AdminToolbarComponent {
    @Input() isButtonsVisible: boolean = false;
}
