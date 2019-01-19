import { Quote } from "../data/quote.interface";


export class QuotesService {
    private favoriteQuotesArray: Quote[] = [];

    addToFavorite(quote: Quote) {
        this.favoriteQuotesArray.push(quote);
        console.log(this.favoriteQuotesArray);
    }

    removeFromFavorite(quote: Quote) {
        const position = this.favoriteQuotesArray.findIndex((tmp: Quote) => {
            return tmp.id == quote.id;
        });
        this.favoriteQuotesArray.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotesArray.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotesArray.find((quoteItem: Quote) => {
            return quoteItem.id == quote.id;
        });
    }

}