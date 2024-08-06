import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormularioAdultoComponent } from './formulario-adulto/formulario-adulto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FormularioAdultoComponent],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'CreSentia-Frontend';
}
