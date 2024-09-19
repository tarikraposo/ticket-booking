import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
