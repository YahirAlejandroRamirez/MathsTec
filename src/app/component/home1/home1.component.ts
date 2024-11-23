
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngFor
import { SafeUrlPipe } from './safe-url.pipe'; // Ajusta la ruta según la ubicación real del pipe

@Component({
  selector: 'app-home1',
  standalone: true, // Define el componente como standalone
  imports: [
    CommonModule,    // Importa CommonModule para usar directivas como *ngFor
    //SafeUrlPipe      // Importa el pipe SafeUrlPipe
  ],
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})

export class Home1Component {
  videos = [
    { title: 'Calculo Diferencial'  },
    { title: 'Calculo Integral'  },
    { title: 'Calculo Vectorial'  }
  ];
}

