import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  isOpen = false;
  isDropdownOpen = false;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getData();
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json()).subscribe(res => {
      console.log(res);
    });
  }
}
