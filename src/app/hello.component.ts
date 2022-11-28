import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})

export class HelloComponent  {
  @Input() fg: FormGroup;


  constructor(
    private fb: FormBuilder
  ) { }

  addOption(): void {
    this.list.push(this.buildListItem());
  }

  removeOption(i: number): void {
    this.list.removeAt(i);
  }

  private buildListItem(): FormGroup {
    return this.fb.group({
      item: '',
    });
  }

  get list(): FormArray { return this.fg.get('list') as FormArray; }
}
