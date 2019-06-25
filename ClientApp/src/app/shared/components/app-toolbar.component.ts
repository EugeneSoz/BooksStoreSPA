import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-toolbar',
    templateUrl: './app-toolbar.component.html',
})
export class AppToolbarComponent {
    @Input() isButtonsVisible: boolean = false;
    @Input() link: string = "";

    isCollapsed: boolean = true;
}
