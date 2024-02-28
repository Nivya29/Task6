class Movie{
    constructor(title,studio,rating="PG"){
        this.title= title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
      }
    }
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
    console.log(casinoRoyale);

    const movies = [
        new Movie("Encanto","Studio1","PG"),
        new Movie("Up","Studio2","PG"),
        new Movie("Inside Out","Studio3","PG-13"),
        new Movie("How to Train Your Dragon","Studio4","PG"),
        new Movie("The Croods","Studio5","PG"),
        new Movie("Ratatouille ","Studio6","PG"),
        new Movie("Sleeping Beauty","Studio7","U/A"),
    ];
    //usage of the getPG method
    const movies1 =  Movie.getPG(movies);
    console.log(movies1);
   