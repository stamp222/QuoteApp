import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { TabsPage } from '../tabs/tabs';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  quotes: Quote[];
  tabsPage = TabsPage

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public quoteService: QuotesService,
     public mdlCtrl: ModalController,
     public menuCtrl: MenuController,
     public settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  viewOfQuote(quote: Quote) {
    const modal = this.mdlCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove == true) {
        this.deleteFromFavorite(quote);
      }
    })
  }
  deleteFromFavorite(quote: Quote) {
    this.quoteService.removeFromFavorite(quote);
    // 2 altenatives way to update data in list inside page
    // this.quotes = this.quoteService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteItem: Quote) => {
      return quoteItem == quote;
    })
    this.quotes.splice(position, 1);
  }
    // there's two way to change background color.
  onChangeBackground() {
    return this.settingsService.isAltBackground() ? "altQuoteBackground" : "quoteBackground";
  }
  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
