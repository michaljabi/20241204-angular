import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Źródła Async w JS:
// 1. Callback (function, () => {}) | natywna rzecz
// 2. Promises (async/await — lukier składniowy do Promise) | natywna rzecz
// 3. Observables (Streams) | nie są natywne — są z bibliotek (RxJS).


// To będzie stateless service
// Jego zadaniem będzie pobranie danych z back-end, wysyłka danych update
// etc.
// takie CRUDy do back-endu
// ALE uwaga tylko w kontekście AuctionItem
@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AuctionItem[]> {
    // GET ajax
    return this.httpClient.get<AuctionItem[]>('http://localhost:3000/auctions')
  }

  // TS Utility type Omit
  addNew(idLessItem: Omit<AuctionItem, 'id'>): void {
    // POST ajax
  }
}
