import {Component, OnInit} from '@angular/core';
import {AulaComponent} from "../aula/aula.component";
import {NgForOf, NgIf} from "@angular/common";
import {Aula2Component} from "../aula2/aula2.component";
import {PanelService} from "../../@api/contenido Profesor/panel.service";

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    AulaComponent,
    NgForOf,
    NgIf,
    Aula2Component
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  constructor(public panelService: PanelService) {}

  togglePanel(panel: { isOpen: boolean }) {
    panel.isOpen = !panel.isOpen;
  }
}
