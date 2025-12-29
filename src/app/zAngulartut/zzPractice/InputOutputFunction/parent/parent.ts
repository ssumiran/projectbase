import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  inputValueToChild = signal('Pass value to child component using input ');

  outputFromChildData = signal<string>('');
  outputFromChild($event: any) {
    this.outputFromChildData.set($event);
  }
}
