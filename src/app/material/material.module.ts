import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const MAT_MODULES = [MatInputModule, MatTableModule, MatDialogModule];

@NgModule({
  exports: [MAT_MODULES],
  imports: [MAT_MODULES],
})
export class MaterialModule {}
