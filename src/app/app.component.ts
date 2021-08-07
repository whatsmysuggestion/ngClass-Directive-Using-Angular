import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `



<ul *ngFor="let person of people">
  <li [class.text-success]="person.country === 'UK'"
      [class.text-primary]="person.country === 'USA'"
      [class.text-danger]="person.country === 'India'">
    {{ person.name }} ({{ person.country }})
  </li>
</ul>



 `
})
export class AppComponent {
people: any[] = [
    {
      name: "Douglas  Pace",
      age: 35,
      country: "UK"
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      country: "USA"
    },
    {
      name: "Day  Meyers",
      age: 21,
      country: "India"
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      age: 32,
      country: "USA"
    }
  ];
}
