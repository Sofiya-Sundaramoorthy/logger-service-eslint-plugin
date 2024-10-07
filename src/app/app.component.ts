import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from '../services/logger/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logger-service-eslint';
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('This is a console message');
  }
}
