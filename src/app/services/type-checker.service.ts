import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypeCheckerService {
  constructor() {}

  isString(value: string): boolean {
    if (typeof value === 'string' && !value.includes('https://' || '.png')) {
      return true;
    } else {
      return false;
    }
  }

  isImgLink(value: string): boolean {
    if (value.includes('https://' && '.png')) {
      return true;
    } else {
      return false;
    }
  }

  isLink(value: string): boolean {
    if (value.includes('https://') && !value.includes('.png')) {
      return true;
    } else {
      return false;
    }
  }
}
