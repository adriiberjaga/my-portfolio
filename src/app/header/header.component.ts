import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeSection: string = 'inicio'; // Sección activa inicial

  // Método para verificar si la sección está activa
  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  // Escuchar el evento de desplazamiento
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 50; // Ajuste para el desplazamiento

    sections.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        this.activeSection = section.id; // Actualiza la sección activa
      }
    });
  }
}
