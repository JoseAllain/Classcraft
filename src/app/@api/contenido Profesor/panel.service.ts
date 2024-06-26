import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  panels: { title: string, content: string, isOpen: boolean, cards: { name: string, files: File[] }[], newCardName: string }[] = [
    { title: 'Semana 1', content: 'Contenido de la semana 1', isOpen: false, cards: [], newCardName: '' }
  ];

  constructor() { }

  getPanels() {
    return this.panels;
  }

  addPanel(title: string) {
    this.panels.push({
      title: title,
      content: `Contenido del nuevo panel`,
      isOpen: false,
      cards: [],
      newCardName: ''
    });
  }

  addCard(panel: { cards: { name: string, files: File[] }[], newCardName: string }, cardName: string) {
    if (cardName.trim()) {
      panel.cards.push({ name: cardName, files: [] });
      panel.newCardName = ''; // Limpiar el campo después de añadir el card
    }
  }

  addFileToCard(card: { files: File[] }, file: File) {
    card.files.push(file);
  }
}
