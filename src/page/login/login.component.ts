import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
})
export class LoginComponent {
  attemptCount: number = 0;
  password: string = '';
  isInvalid: boolean = false;
  isBlocked: boolean = false;

  @Output() isValidPasswords: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.password === environment.passwordAdmin) {
      this.isInvalid = false;
      this.isValidPasswords.emit(true);

      return;
    }

    if (this.password !== environment.passwordAdmin && this.attemptCount <= 5) {
      this.isInvalid = true;
      this.attemptCount++;
    }

    if (this.attemptCount >= 5) {
      this.isBlocked = true;
    }
  }
}
