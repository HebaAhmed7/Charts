import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const material = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterilModule {}
