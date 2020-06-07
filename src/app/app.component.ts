import { Component } from '@angular/core';
import { GhService } from './gh-repository/gh.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public repositories$: Observable<any>;

    constructor(private ghService: GhService) { }

    public getRepositories(userName: string): void {
        this.repositories$ = this.ghService.getRepositories(userName);
    }
}
