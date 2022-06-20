### Create project

- npm i -g @angular/cli
- ng new movies
- install angular language service plugin
- ng serve
- App structuur bekijken
- Package.json
- Index.html
- Main.js
- ng add @ng-bootstrap/ng-bootstrap@13.0.0-beta.1


### Add header

- Alles verwijderen uit app.component.
- header component aanmaken. Maak er iets mooi van en zorg ervoor dat de titel van uit het app component wordt doorgegeven

### Add movie service

- setup mock api
    - npm install angular-in-memory-web-api --save-dev
    - Create database folder onder app en add in-memory-movie.service.ts (doorsturen)
    - add to HttpClientInMemoryWebApiModule.forRoot(InMemoryMovieService) to app.module imports
- create movie.service onder services folder manueel
    - inject in-memory-movie.service
    - endpoint = 'api/movies'
    - add function to get favorites

