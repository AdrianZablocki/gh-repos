import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-repository-list',
    templateUrl: './repository-list.component.html',
    styleUrls: ['./repository-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryListComponent {
    @Input() public repositories: Observable<any>;

    constructor() { }
}
