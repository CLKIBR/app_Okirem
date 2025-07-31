import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-unit-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-unit-modal.component.html',
})
export class DeleteUnitModalComponent {
  @Input() unitTitle: string = '';
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
