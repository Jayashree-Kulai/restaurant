import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display: boolean = false;
  inputLocation:string = '';
  today;
  count:boolean = false;

  constructor() {
    this.today = new Date();
   }

  ngOnInit(): void {
  }

  onSearchOfFood(): void {
    let count = document.getElementById("search1") as HTMLInputElement;
    if(count.value.length > 0) {
      this.count = true;
    }
    else {
      this.count = false;
    }
  }

  myFunction(): void {
    var filter, a, i, txtValue;
    let ul = document.getElementById('myUL') as HTMLUListElement;
    let input = document.getElementById("myInput") as HTMLInputElement;

    if (input != null) {
      filter = (document.getElementById("myInput") as HTMLInputElement).value.toUpperCase();
      let li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
  }

  selectLocation(location : string): void {
    this.inputLocation = location;
  }

  displayList(): void {
   if ( this.display == true) {
    this.display = false;
   }
   else{
    this.display = true;
   }
  }

}
