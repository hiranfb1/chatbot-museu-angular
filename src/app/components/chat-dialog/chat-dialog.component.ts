import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from '../../types/message.type';
import { ChatResponseComponent } from '../chat-response/chat-response.component';

@Component({
  selector: 'chat-dialog',
  standalone: true,
  imports: [CommonModule, ChatResponseComponent],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss',
})
export class ChatDialogComponent {
  @Input() messages: Message[] = [];
}
