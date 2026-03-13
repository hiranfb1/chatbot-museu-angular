import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from '../../types/message.type';

@Component({
  selector: 'chat-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-response.component.html',
  styleUrl: './chat-response.component.scss',
})
export class ChatResponseComponent {
  @Input() message!: Message;
}
