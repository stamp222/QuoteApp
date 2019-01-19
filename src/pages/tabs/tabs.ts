import { Component } from "@angular/core";
import { FavoritePage } from "../favorite/favorite";
import { LibraryPage } from "../library/library";

@Component({
    selector: 'page-tabs',
    templateUrl: "tabs.html"

})
export class TabsPage {
    favoritesPage = FavoritePage;
    libraryPage = LibraryPage;
}