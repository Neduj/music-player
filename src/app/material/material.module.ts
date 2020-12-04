import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const MAT_MODULES = [
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatDividerModule,
  MatAutocompleteModule,
];

@NgModule({
  exports: [MAT_MODULES],
  imports: [MAT_MODULES],
})
export class MaterialModule {}
