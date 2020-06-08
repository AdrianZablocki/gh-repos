import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GhService, Repository } from './gh-repository/gh.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public repositories$: Observable<Repository[]>;
    public isLoading$: Observable<boolean>;

    constructor(private ghService: GhService) { }

    ngOnInit(): void {
        this.isLoading$ = this.ghService.isLoadingAction$;
    }

    public getRepositories(userName: string): void {
        this.repositories$ = this.ghService.getRepositories(userName);
    }
}
