import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { GhService } from './gh.service';


@NgModule({
    declarations: [
        SearchFormComponent,
        RepositoryListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        SearchFormComponent,
        RepositoryListComponent
    ],
    providers: [GhService]
})
export class GhRepositoryModule { }
