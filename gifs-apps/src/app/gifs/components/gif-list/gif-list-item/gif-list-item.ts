import { Component, input } from '@angular/core';
@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  standalone: true,
  styles: ``
})
export class GifListItem {
    imageUrl = input.required<string>();
}
