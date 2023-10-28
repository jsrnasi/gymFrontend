import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gymzoo';


  isLoading = false;

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.isLoading = true;

    // Simulate an asynchronous operation
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
