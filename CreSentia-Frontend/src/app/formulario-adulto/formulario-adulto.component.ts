import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-adulto',
  standalone: true,
  templateUrl:'./formulario-adulto.component.html',
  styleUrls: ['./formulario-adulto.component.css'],
  imports: [FormsModule]
})
export class FormularioAdultoComponent {
  nombre: string = '';
  alias: string = '';
  photo: string | ArrayBuffer | null = null;
  mensaje: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.photo = reader.result;
      reader.readAsDataURL(file);
    }
  }  

  onSubmit(): void {
    if (this.nombre && this.alias) {
      this.mensaje = '¡Información guardada exitosamente!';
    } else {
      this.mensaje = 'Por favor, completa todos los campos.';
    }
  }
}

