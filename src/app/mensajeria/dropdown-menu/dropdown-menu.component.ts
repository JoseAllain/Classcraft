import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
  @Output() optionSelected = new EventEmitter<string>();

  onOptionSelected(option: string): void {
    this.optionSelected.emit(option);
  }
}
