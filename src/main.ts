import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
export {GtagService} from "./app/gtag-service.service";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
