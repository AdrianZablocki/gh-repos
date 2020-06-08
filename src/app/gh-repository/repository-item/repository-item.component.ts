import { Component, OnInit, Input } from '@angular/core';

import { Repository, Branch } from '../gh.service';

@Component({
    selector: 'app-repository-item',
    templateUrl: './repository-item.component.html',
    styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {
    @Input() public repository: Repository;
    @Input() public branches: Branch;

    constructor() { }

    ngOnInit(): void {
    }

}
