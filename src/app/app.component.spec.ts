import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { GhService } from './gh-repository/gh.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
    let mockGhService;
    beforeEach(async(() => {
        mockGhService = jasmine.createSpyObj(['getRepositories']);
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: GhService, useValue: mockGhService }
            ]
        }).compileComponents();

        mockGhService.getRepositories.and.returnValue(of({
            name: 'aniamtions',
            login: 'adrian',
            branches: [{ name: 'fake branch', sha: 'saww3123wwqeeqdewdxs' }]
        }));
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});

