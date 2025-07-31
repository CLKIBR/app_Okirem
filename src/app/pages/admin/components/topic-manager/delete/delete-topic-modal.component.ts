import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-topic-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-topic-modal.component.html',
})
export class DeleteTopicModalComponent {
  @Input() topicTitle: string = '';
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
