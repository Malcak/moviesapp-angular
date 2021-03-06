import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchMovie(filter: string) {
    filter = filter.trim();
    if (filter.length === 0) {
      return;
    }
    this.router.navigate(['/movies', filter]);
  }
}
