import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy-interface';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  private environment = environment;
  trendingGifs = signal<Gif[]>([]);
  searchResults = signal<Gif[]>([]);
  constructor() {
    this.loadTrendingGifs();
  }
  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${this.environment.urlBase}/gifs/trending`, {
      params: {
        api_key: this.environment.apiKey,
        limit: '40',
      }
    }).subscribe((response) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trendingGifs.set(gifs);
    });
  }

  searchGifs(query: string) {
    const q = (query ?? '').trim();
    if (!q) {
      this.searchResults.set([]);
      return;
    }
    this.http.get<GiphyResponse>(`${this.environment.urlBase}/gifs/search`, {
      params: {
        api_key: this.environment.apiKey,
        q,
        limit: '40',
      }
    }).subscribe((response) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.searchResults.set(gifs);
    });
  }
}
