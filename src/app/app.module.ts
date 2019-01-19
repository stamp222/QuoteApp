import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { FavoritePage } from '../pages/favorite/favorite';

import { QuotePage } from '../pages/quote/quote';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    FavoritePage,
    QuotePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    FavoritePage,
    QuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
