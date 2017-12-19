import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  constructor( private cookieService: CookieService, private router: Router) { }
}
