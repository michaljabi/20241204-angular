
> Możemy instalować biblioteki na różne sposoby i z różnym skutkiem:


## (1) local

- Instalacja lokalna jako `devDependency`:
```cmd
npm i -D nazwa_lib@wersja_lib
```
- Instalacja lokalna jako `devDependency`:
```cmd
npm i -D nazwa_lib@wersja_lib
```


## (2) global

- Po Instalacji CLI dostępne zawsze w terminalu:
```cmd
npm i -g nazwa_lib@wersja_lib
```

## (3) "JUST RUN" (npm execute)

- To się tylko wrzuci do cache, nie będzie dostępne potem globalnie:
```cmd
npx nazwa_lib@wersja_lib
```

> 💡jeśli nie podasz `@wersja_lib` to domyślnie zainstaluje się tzw. `latest` wersja
