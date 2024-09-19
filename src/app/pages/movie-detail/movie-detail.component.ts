import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {
  totalImagens:number = 4
}
