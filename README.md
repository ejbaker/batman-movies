# Front-End Coding Challenge

## Methodology

Given the option to work with either Angular 1.7 or the latest (then Angular 7), I opted for the latter. I always prefer to learn new things when I can, and it was a lot more fun and exciting to work in Angular 7. I used Angular CLI for the very sensible directory structure and boilerplate tests. The component / service generator also came in handy.

## Design

App initially loads the list of movies via a data service that connects to the API. A pipe is used to manipulate the resulting data slightly, changing the value of Poster and adding a few more fields from the get-by-ID API call to match the comp. Clicking the View Details button opens up a separate view, mostly included for the sake of adding a bit more to the app, and on that view the View on IMDB button from the comp is available, which then opens imDB in a named second tab to avoid navigating the user away from our web app entirely.

The View Details button was not called for by the comp, but given how easy it was to provide both it and View on IMDB, that is likely what I would do in a real-world situation -- build both options, then bring it back to the project manager to see which one is preferred.

## Angular 7 modules

* @angular/animations
* @angular/router

## Other dependencies

* rxjs
* core-js
* zone.js
* reflex-grid
* modernizr