import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import 'https://www.googlcom/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22feeds%22%2C%22version%22%3A%221.0%22%2C%22nocss%22%3Atrue%7D%5D%7D.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
