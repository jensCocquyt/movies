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
    - kan met input of content projection
    - show encapsulation in devtools (emulated vs shadowdom)

### Add movie service

- setup mock api
    - npm install angular-in-memory-web-api --save-dev
    - Create database folder onder app en add in-memory-movie.service.ts (doorsturen)
    - add to HttpClientInMemoryWebApiModule.forRoot(InMemoryMovieService) to app.module imports
- create movie.service onder services folder manueel
    - inject HttpClient (module should be added)
    - endpoint = 'api/movies'
    - add function to get all

### Show all movies on home page
- show directive and pipes part in ppt
- create movie overview component
- create movie component
- use *ngFor
- async pipe

### Highlight todo item on hover
- use custom directive with mouseEnter/mouseLeave
- 2 options => change style on hover or add class on hover

### Navigate to detail component
- add empty path to to router with redirect to 'movies path
- add movies path to to router with component app movie overview
- replace 'app-movie-overview' tag with 'router-outlet' tag in app component
- add movie detail component and add route for this component
- add routerlink to app-movie tag

### get movie in detail component
- add getById function to movie.service
- use ActivatedRoute to get the current id
- get the movie object as observable

### add movie detail info component and pass movie object to it
- reuse app-movie component

### add movie form component
- create a movie-form component and pass movie object
- create a form with formgroup for fields: title, year and isFavorite
- add required validators on title and and year
- add custom year validator
- add output for submit action
- handle output in movie-detail component
- add updateMovie function to service
- show alert on success
- PROBLEMS: 
    - get movie is called twice
        - use ngIf on parent tag (use ng-container)
        - use shareReplay
    - movie in detail is not updated
        - add movie-detail service with behavior subject (ngrx ready)



### DIY
 -- control value accessor
 -- implement ngrx
 -- async validator


