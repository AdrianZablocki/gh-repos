import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
    @Output() public submitName: EventEmitter<string> = new EventEmitter<string>();

    public searchFormControl: FormControl;

    constructor() { }

    ngOnInit(): void {
        this.searchFormControl = new FormControl('', [
            Validators.required,
            Validators.minLength(2),
        ]);
    }

    public onSubmit(userName: string): void {
        this.submitName.emit(userName);
    }
}
