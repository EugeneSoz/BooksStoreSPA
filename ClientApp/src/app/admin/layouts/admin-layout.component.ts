import { Component, ViewChild, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd } from '@angular/router';
import { filter, count } from 'rxjs/operators';

import { AdminToolbarComponent } from '../components/admin-shared/admin-toolbar.component';
import { PageLink } from '../../models/enums/page-link.enum';

@Component({
    templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {}
