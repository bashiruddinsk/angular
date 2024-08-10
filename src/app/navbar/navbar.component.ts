import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';

  toggleSidenav() {
    // Logic to open/close the side navigation
  }

  onSearch() {
    console.log('Search query:', this.searchQuery);
    // Logic for search functionality
  }

  onVoiceSearch() {
    console.log('Voice search');
    // Logic for voice search functionality
  }
  isSidebarHidden: boolean = false;

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
