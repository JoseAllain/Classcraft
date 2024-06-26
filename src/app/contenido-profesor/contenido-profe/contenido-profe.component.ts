import { Component } from '@angular/core';
import {AulaComponent} from "../../aula/aula/aula.component";
import {Aula2Component} from "../../aula/aula2/aula2.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PanelService} from "../../@api/contenido Profesor/panel.service";

@Component({
  selector: 'app-contenido-profe',
  standalone: true,
  imports: [
    AulaComponent,
    Aula2Component,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './contenido-profe.component.html',
  styleUrl: './contenido-profe.component.scss'
})
export class ContenidoProfeComponent {
  newPanelTitle: string = '';

  constructor(public panelService: PanelService) {}

  togglePanel(panel: { isOpen: boolean }) {
    panel.isOpen = !panel.isOpen;
  }

  addPanel() {
    if (this.newPanelTitle.trim()) {
      this.panelService.addPanel(this.newPanelTitle);
      this.newPanelTitle = '';
    }
  }

  addCard(panel: { cards: { name: string, files: File[] }[], newCardName: string }) {
    this.panelService.addCard(panel, panel.newCardName);
  }

  onFileSelected(event: any, card: { files: File[] }) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.panelService.addFileToCard(card, files[i]);
    }
  }
}
