import { Component, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifsService } from '../../services/gifs';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  styles: ``
})
export default class SearchPage {
  gifsService = inject(GifsService);

  onSearch(query: string) {
    this.gifsService.searchGifs(query);
  }
}
