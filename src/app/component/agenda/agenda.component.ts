
import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  selectedDate: Date | null = null;
  events: { date: Date, description: string }[] = [];
  newEvent: string = '';

  addEvent() {
    if (this.selectedDate && this.newEvent.trim()) {
      this.events.push({ date: this.selectedDate, description: this.newEvent.trim() });
      this.newEvent = '';
    }
  }

  getEventsForDate(date: Date): { date: Date, description: string }[] {
    return this.events.filter(event => event.date.toDateString() === date.toDateString());
  }
}
