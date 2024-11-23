import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from './exercise.model';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: '1',
      question: '¿Cuál es la derivada de f(x) = x^2?',
      options: [
        { text: '2x', correct: true },
        { text: 'x^2', correct: false },
        { text: '2x + 1', correct: false },
        { text: 'x + 2', correct: false },
      ],
      explanation: 'La derivada de x^2 es 2x según la regla de potencias.',
    },
    {
      id: '2',
      question: '¿Cuál es la derivada de f(x) = sin(x)?',
      options: [
        { text: 'cos(x)', correct: true },
        { text: 'sin(x)', correct: false },
        { text: '-cos(x)', correct: false },
        { text: '-sin(x)', correct: false },
      ],
      explanation: 'La derivada de sin(x) es cos(x) según las reglas trigonométricas.',
    },
  ];

  getExercises(): Observable<Exercise[]> {
    return of(this.exercises);
  }
}
