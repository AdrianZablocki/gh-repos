import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, concatMap, map, toArray, tap } from 'rxjs/operators';

export interface Repository {
    name: string;
    login: string;
    branches: Branch[];
}

export interface Branch {
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
    private token: string = 'a21cd6d779b9b55097d9569a3cef232ce7d311cc';
    private headers = new HttpHeaders().set('authorization', `token ${this.token}`);

    private isLoadingSubject = new BehaviorSubject<boolean>(false);
    public isLoadingAction$ = this.isLoadingSubject.asObservable();

    constructor(private http: HttpClient) { }

    public getRepositories(userName: string): Observable<Repository[]> {
        this.isLoadingSubject.next(true);
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
            tap(() => this.isLoadingSubject.next(false)),
            catchError(this.handleError)
        );
    }

    private getRepositoryBranches(repoName: string, userName: string): Observable<Branch[]> {
        this.isLoadingSubject.next(true);
        return this.http.get(`${this.baseApiUrl}/repos/${userName}/${repoName}/branches`, {
            headers: this.headers
        }).pipe(
            map((res: any[]) => res.map((item: any) => ({
                name: item.name,
                sha: item.commit.sha
            }))),
            tap(() => this.isLoadingSubject.next(false)),
            catchError(this.handleError)
        )
    }

    private handleError(err: ErrorEvent) {
        return throwError(err);
    }
}
