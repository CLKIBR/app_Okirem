// Copyright (c) 2025 CLKIBR
// Tüm Hakları Saklıdır - Ayrıntılar için LICENSE dosyasına bakınız
/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import 'iconify-icon';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

