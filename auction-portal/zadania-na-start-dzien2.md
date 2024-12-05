# Zadania na start
## Dzień 2

### Zadanie #0 | Dokończ `main-menu`

0.1 Utwórz nowy komponent `main-menu` - samodzielnie zdecyduj czy chcesz inline czy nie  
0.2 Dodaj do niego HTML:
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
  <button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse show">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/auctions">Aukcje</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/promotions">Promocje</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/advices">Podpowiadamy</a>
      </li>
    </ul>
  </div>
</nav>
```

0.3 osadź menu w `main.container` na app.component  
0.4 Spraw aby linki `li.nav-item` były generowane dynamicznie na template za pomocą bloku: `@for() {}`
   https://angular.dev/api/core/@for  
0.5 Przygotuj `interface` lub `type` dla elementów menu, trzymaj je w tablicy

### Zadanie #1 | Fikcyjny serwer back-end

1.1 Skorzystaj z biblioteki npm: [json-server](https://www.npmjs.com/package/json-server), zainstaluj ją w projekcie tak, aby inni też mogli z niej później korzystać (zamiast flagi `-g` przy instalacji zastosuj flagę `-D`, tak aby biblioteka została wpisana do `devDependencies`)

1.2 Jako fikcyjne źródło danych wystaw plik `.json` z następującą zawartością:

```json
{
  "auctions": [
    {
      "id": "91TG",
      "title": "Części do aparatu",
      "imgUrl": "https://picsum.photos/id/36/200/200",
      "description": "Jakiś opis",
      "price": 2000
    },
    {
      "id": "LqGA",
      "title": "Mac Book",
      "imgUrl": "https://picsum.photos/id/48/600/600",
      "description": "Używany - ale sprawny",
      "price": 4000
    },
    {
      "id": "kV-c",
      "title": "Smartfon",
      "imgUrl": "https://picsum.photos/id/160/600/600",
      "price": 800
    },
    {
      "id": "Ti72",
      "title": "Samochoód",
      "imgUrl": "https://picsum.photos/id/183/600/600",
      "description": "Zabytkowy ogórek",
      "price": 1200
    },
    {
      "title": "Most",
      "price": 30000,
      "imgUrl": "https://picsum.photos/id/134/600/600",
      "description": "stalowy",
      "id": "74Bs"
    }
  ]
}
```

1.3 Napisz odpowiedni skrypt, aby można było swobodnie wystawiać serwer

1.4 Upewnij się, że back-end działa po uruchomieniu skryptu wejdź na stronę: http://localhost:3000/auctions

### Zadanie #2 | Model / kształt danych

Wiedząc, jak dane będą serwowane przez backend (zadanie 1). Napisz odpowiedni `interface` odwzorowujący kształt danych dla pojedynczej _Aukcji_ (możesz użyć do tego komendy [ng generate](https://angular.io/cli/generate)).

### Zadanie #3 | Konfiguracja dev

Zmień zapisy w skrypcie `start` tak, aby po jego uruchomieniu, otwierała się domyślna przeglądarka a serwer dev osadzał się na porcie `4300`.  
Skorzystaj z dokumentacji: [ng serve](https://angular.dev/cli/serve).

### Zadanie #4 | Bez selektorów: `auctions-page`

1. Przygotuj nowy komponent `auctions-page`, użyj flagi `--skip-selector` przy jego utworzeniu
2. Dodaj do niego kod:

```angular181html
<div class="row">
  @for(i of [1,2,3,4,5,6,7,8,9,10]; track i) {
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    [auction-card] (i)
  </div>
  }
</div>
```

3. umieść w tablicy `routes` jako:
```typescript
[
  { path: 'auctions', component: AuctionsPageComponent }
]
```
4. sprawdź czy komponent wyświetla się po przejściu na:
http://localhost:4300/auctions
