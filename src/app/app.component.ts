import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    greeting: 'Hello',
    list: [
      { item: '1' },
      { item: '2' },
      { item: '3' },
    ]
  };
  exampleForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.exampleForm.patchValue(this.data);
  }

  private createForm(): void {
    this.exampleForm = this.fb.group({
      greeting: ['', Validators.required],
      list: this.fb.array([this.buildListItem()])
    });
  }

  private buildListItem(): FormGroup {
    return this.fb.group({
      item: '',
    });
  }

  get list(): FormArray { return this.exampleForm.get('list') as FormArray }

}
