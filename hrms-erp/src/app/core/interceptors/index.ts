import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from './default-interceptor';
import { LoggingInterceptor } from './logging-interceptor';
import { NoopInterceptor } from './noop-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },

];
