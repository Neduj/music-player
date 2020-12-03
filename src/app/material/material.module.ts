import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const MAT_MODULES = [
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatDividerModule,
  MatAutocompleteModule,
];

@NgModule({
  exports: [MAT_MODULES],
  imports: [MAT_MODULES],
})
export class MaterialModule {}
