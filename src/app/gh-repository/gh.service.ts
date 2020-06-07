import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap, map, toArray, tap } from 'rxjs/operators';

interface Repository {
    name: string;
    login: string;
    branches: Branch[];
}

interface Branch {
    name: string;
    sha: string;
}

interface RepositoryInfo {
    name: string;
    login: string;
}

@Injectable()
export class GhService {
    private baseApiUrl: string = 'https://api.github.com';
    private token: string = 'b69726b8d48cc752341102c6b290c467b5d4095c';
    private headers = new HttpHeaders().set('authorization', `token ${this.token}`);

    constructor(private http: HttpClient) { }

    public getRepositories(userName: string): Observable<Repository[]> {
        console.log('request', userName);
        return this.http.get(`${this.baseApiUrl}/users/${userName}/repos`, {
            headers: this.headers
        }).pipe(
            concatMap((response: any[]) => response.map((repository: any): RepositoryInfo => ({
                name: repository.name,
                login: repository.owner.login,
            }))),
            concatMap((data: RepositoryInfo) => {
                return this.getRepositoryBranches(data.name, userName).pipe(
                    map(((branches: Branch[]) => ({ ...data, branches: branches }) as Repository))
                )
            }),
            toArray(),
            catchError(this.handleError)
        );
    }

    private getRepositoryBranches(repoName: string, userName: string): Observable<Branch[]> {
        return this.http.get(`${this.baseApiUrl}/repos/${userName}/${repoName}/branches`, {
            headers: this.headers
        }).pipe(
            map((res: any[]) => res.map((item: any) => ({
                name: item.name,
                sha: item.commit.sha
            }))),
            catchError(this.handleError)
        )
    }

    private handleError(err: ErrorEvent) {
        return throwError(err);
    }
}
