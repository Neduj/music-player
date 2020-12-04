import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Column } from 'src/app/models/column.interface';
import { Rows } from 'src/app/models/rows.interface';
import { TypeCheckerService } from 'src/app/services/type-checker.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() rows: Rows[] = [];
  @Input() columns: Column[] = [];
  limit: boolean = true;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private typeCheck: TypeCheckerService
  ) {}

  ngAfterViewInit(): void {
    if (document.body.clientWidth < 600) {
      this.limit = false;
    } else {
      this.limit = true;
    }
    this.changeDetectorRef.detectChanges();
  }

  isString(value: string): boolean {
    return this.typeCheck.isString(value);
  }

  isImgLink(value: string): boolean {
    return this.typeCheck.isImgLink(value);
  }

  isLink(value: string): boolean {
    return this.typeCheck.isLink(value);
  }
}
