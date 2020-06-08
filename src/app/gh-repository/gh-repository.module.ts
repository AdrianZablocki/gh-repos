import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { GhService } from './gh.service';
import { RepositoryItemComponent } from './repository-item/repository-item.component';


@NgModule({
    declarations: [
        SearchFormComponent,
        RepositoryListComponent,
        RepositoryItemComponent
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
        MatCardModule
    ],
    exports: [
        SearchFormComponent,
        RepositoryListComponent
    ],
    providers: [GhService]
})
export class GhRepositoryModule { }
