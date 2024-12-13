import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {
  isDarkMode: boolean = false;
  isMobile: boolean = false; // Para detectar si es móvil

  constructor(private router: Router) {}

  

  ngOnInit() {
    this.checkScreenSize(); // Comprueba el tamaño de pantalla al iniciar la página
  }

  // Método para alternar el modo oscuro
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  // Verifica si es una pantalla móvil
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; 
  }

  // Redirigir al login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
