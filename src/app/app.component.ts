import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task7';
}
