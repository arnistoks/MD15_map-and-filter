import {makeLogger} from "ts-loader/dist/logger";

console.log("Ready for coding");

type Show = {
  id: number;
  title: string;
  description: string;
  year: number;
  isPopular: boolean;
  available: boolean;
  ratingDetails: RatingDetail;
  genres: string[];
  episodes: Episode[];
};

type RatingDetail = {
  rating: number;
  count: number;
};

type Episode = {
  id: number;
  title: string;
  season: number;
  episode: number;
  released: string;
};

const shows: Show[] = [
  {
    id: 1,
    title: "Arrow",
    description:
      "It is based on the DC Comics character Green Arrow, a costumed crime-fighter",
    year: 2012,
    isPopular: false,
    available: false,
    ratingDetails: {
      rating: 8.1137,
      count: 642,
    },
    genres: ["Drama", "Action", "Science-Fiction"],
    episodes: [
      {
        id: 1,
        title: "Pilot",
        season: 1,
        episode: 1,
        released: "2012-10-11 00:00:00",
      },
      {
        id: 24,
        title: "City of Heroes",
        season: 2,
        episode: 1,
        released: "2012-10-11 00:00:00",
      },
    ],
  },
  {
    id: 2,
    title: "Bouncers",
    description:
      "Series following the brave people who keep the peace at night.",
    year: 2019,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 6.532,
      count: 583,
    },
    genres: ["Lifestyle", "Drama"],
    episodes: [
      {
        id: 1,
        title: "Episode 5",
        season: 1,
        episode: 5,
        released: "2019-08-28 23:00:00",
      },
      {
        id: 6,
        title: "Episode 6",
        season: 1,
        episode: 6,
        released: "2019-08-28 23:00:00",
      },
    ],
  },
  {
    id: 3,
    title: "Supernatural",
    description:
      "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings",
    year: 2005,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 9.995,
      count: 50,
    },
    genres: ["Fantasy", "Drama"],
    episodes: [
      {
        id: 2,
        title: "Wendigo",
        season: 1,
        episode: 2,
        released: "2005-09-20 23:00:00",
      },
    ],
  },
];

console.log(shows);

/*+++++++++++++++++++++++++++ || Task28 || +++++++++++++++++++++++++++*/
// Get all episodes, where genres include "Drama" and rating > 7

// const episodesWhichGenreAreDramaAndRatingMoreThen7 = shows.filter(show => show.genres.includes('Drama') && show.ratingDetails.rating > 7);
//
// console.log(episodesWhichGenreAreDramaAndRatingMoreThen7)

/*+++++++++++++++++++++++++++ || Task27 || +++++++++++++++++++++++++++*/
// Get all shows, where id !== 2

// const allShowsWithoutId2 = shows.filter(show => show.id !== 2);
//
// console.log('All shows without ID 2:', allShowsWithoutId2);

/*+++++++++++++++++++++++++++ || Task26 || +++++++++++++++++++++++++++*/
// Get all shows, where id === 2

// const allShowsWithId2 = shows.filter(show => show.id === 2);
//
// console.log('All shows with ID 2:', allShowsWithId2);

/*+++++++++++++++++++++++++++ || Task25 || +++++++++++++++++++++++++++*/
// Get all shows, where title starts with Sup

// const showTitleStartsWithSup = shows.filter(show => show.title.slice(0, 3) === 'Sup');
//
// console.log('Shows which title starts with "Sup":', showTitleStartsWithSup);

/*+++++++++++++++++++++++++++ || Task24 || +++++++++++++++++++++++++++*/
// Get all shows, where year is < 2019

// const showsReleasedEarlierThen2019 = shows.filter(show => show.year < 2019);
//
// console.log('Shows released earliet then 2019:', showsReleasedEarlierThen2019);

/*+++++++++++++++++++++++++++ || Task23 || +++++++++++++++++++++++++++*/
// Get all shows, where episode title is Wendigo

// const showsWithEpisodeTitleWendigo = shows.filter(show => show.episodes.every(episode => episode.title === 'Wendigo'));
//
// console.log('Shows wiyh episode title "Wendigo":', showsWithEpisodeTitleWendigo);

/*+++++++++++++++++++++++++++ || Task22 || +++++++++++++++++++++++++++*/
// Get all shows, where episode array length >= 2

// const showsWithEpisodesMoreThenOne = shows.filter(show => show.episodes.length >= 2);
//
// console.log('Shows with episodes more then one:', showsWithEpisodesMoreThenOne);

/*+++++++++++++++++++++++++++ || Task21 || +++++++++++++++++++++++++++*/
// Get all shows, where genres include Drama

// const showsGenreIncludesDrama = shows.filter(show => show.genres.includes('Drama'));
//
// console.log('Shows genre includes "Drama":', showsGenreIncludesDrama);

/*+++++++++++++++++++++++++++ || Task20 || +++++++++++++++++++++++++++*/
// Get all shows, where isPopular === true

// const popularShows = shows.filter(show => show.isPopular === true);
//
// console.log('Popular shows:', popularShows);

/*+++++++++++++++++++++++++++ || Task19 || +++++++++++++++++++++++++++*/
// Get all shows, where description includes "DC"

// const showsDescriptionIncludesDc = shows.filter(show => show.description.includes('DC'));
//
// console.log('Shows description includes "DC":', showsDescriptionIncludesDc);

/*+++++++++++++++++++++++++++ || Task18 || +++++++++++++++++++++++++++*/
// Get all shows, where rating < 7

// const showsWithRatingLessThenSeven = shows.filter(show => show.ratingDetails.rating < 7);
//
// console.log('Shows with rating less then 7:', showsWithRatingLessThenSeven);

/*+++++++++++++++++++++++++++ || Task17 || +++++++++++++++++++++++++++*/
// If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'

// const changeReleaseDate = shows.map(show => show.id === 1 ? {
//   ...show, episodes: show.episodes.map(episode => (episode.id === 24 ? {
//     ...episode, released: '2022-10-12 00:00:00'} : episode))
// } : show);
//
// console.log('Change released date:', changeReleaseDate)

/*+++++++++++++++++++++++++++ || Task16 || +++++++++++++++++++++++++++*/
// If year > 2016 and isPopular === true, add 'Documentary' to genres

// const releasedAfter2016AndIsPopular = shows.map(show => (show.year > 2016 && show.isPopular === true) ? {
//   ...show, genres: show.genres.concat('Documentary')} : show);
//
// console.log('Released after 2016 and is popular:', releasedAfter2016AndIsPopular);

/*+++++++++++++++++++++++++++ || Task15 || +++++++++++++++++++++++++++*/
// Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])

// const unsortedGenres = shows.flatMap((show) => show.genres);
// const allGenres = [...new Set(unsortedGenres)];
//
// console.log('All genres:', allGenres);

/*+++++++++++++++++++++++++++ || Task14 || +++++++++++++++++++++++++++*/
// If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []

// const unpopularShowsEmptyEpisodes = shows.map((show) => (show.isPopular === true ? {
//   ...show, episodes: show.episodes.map((episode) => episode.id),
// } : { ...show, episodes: show.episodes.slice(show.episodes.length) }));
//
// console.log('Unpopular shows empty episodes:', unpopularShowsEmptyEpisodes)

/*+++++++++++++++++++++++++++ || Task13 || +++++++++++++++++++++++++++*/
// If genres include 'Science-Fiction', change available to true

// const changeAvailableToTrue = shows.map(show => {
//   const available = true;
//   return show.genres.includes('Science-Fiction') ? {...show, available: show.available = available} : show
// });
//
// console.log("Movie with genre 'Svience-Fiction' is availible:", changeAvailableToTrue);

/*+++++++++++++++++++++++++++ || Task12 || +++++++++++++++++++++++++++*/
// If isPopular === true, change rating to 10

// const changeRatingToTen = shows.map(show => {
//   return show.isPopular === true ? {...show, ratingDetails: {...show.ratingDetails, rating: show.ratingDetails.rating = 10}} : show
// });
//
// console.log('Popular shows change rating to 10:', changeRatingToTen);

/*+++++++++++++++++++++++++++ || Task11 || +++++++++++++++++++++++++++*/
// If rating > 7, change isPopular value to true

// const popularWithRatingMoreThenSeven = shows.map(show => {
//   const popular = true;
//   return show.ratingDetails.rating > 7 ? {...show, isPopular: popular} : {...show, isPopular: !popular}
// });
//
// console.log('Popular with rating more then 7:', popularWithRatingMoreThenSeven);

/*+++++++++++++++++++++++++++ || Task10 || +++++++++++++++++++++++++++*/
// If id === 2, change rating to 8 and add + 1 to rating count

// const secondShowRatingAndCountChange = shows.map(show => {
//   return show.id === 2 ? {...show, ratingDetails: {...show.ratingDetails, rating: show.ratingDetails.rating = 8, count: show.ratingDetails.count + 1}} : show
// });
//
// console.log('Second show rating and count change:', secondShowRatingAndCountChange);

/*+++++++++++++++++++++++++++ || Task9 || +++++++++++++++++++++++++++*/
// If id === 1, change rating to 9.9999

// const firstShowRatingChange = shows.map(show => {
//   return show.id === 1 ? {...show, ratingDetails: {...show.ratingDetails, rating: show.ratingDetails.rating = 9.9999}} : show
// });
//
// console.log('First show rating change:', firstShowRatingChange);

/*+++++++++++++++++++++++++++ || Task8 || +++++++++++++++++++++++++++*/
// map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread

// const objectWithIdTitleDescription = shows.map(show => {
//   const {year, available, genres, ratingDetails, episodes, isPopular, ...secondObject} = show;
//   return secondObject
// })
//
// console.log('Object with id, title, description:', objectWithIdTitleDescription);

/*+++++++++++++++++++++++++++ || Task7 || +++++++++++++++++++++++++++*/
// Round all ratings to 2 decimal places

// const roundedRating = shows.map(show => ({...show, ratingDetails: {...show.ratingDetails, rating: Number(show.ratingDetails.rating.toFixed(2))}}));
//
// console.log('Rounded rating:', roundedRating);


/*+++++++++++++++++++++++++++ || Task6 || +++++++++++++++++++++++++++*/
// Double all ratingDetails.count

// const doubledCount = shows.map(show => ({...show, ratingDetails: {...show.ratingDetails, count: show.ratingDetails.count * 2}}));
//
// console.log( 'Doubled rating:', doubledCount);

/*+++++++++++++++++++++++++++ || Task5 || +++++++++++++++++++++++++++*/
// Capitalise all genres

// const capitalisedGenres = shows.flatMap(show => ({...show, genres: show.genres.map(genre => genre.toUpperCase())}));
//
// console.log('Capitalised genres:', capitalisedGenres)

/*+++++++++++++++++++++++++++ || Task4 || +++++++++++++++++++++++++++*/
// Get an array of ratings rounded to 2 decimal places

// const arrayWithRoundedRatings = shows.map(show => Number(show.ratingDetails.rating.toFixed(2)));
//
// console.log('Array of rounded ratings:', arrayWithRoundedRatings)

/*+++++++++++++++++++++++++++ || Task3 || +++++++++++++++++++++++++++*/
// Get an array of ratings

// const arrayWithRatings = shows.map(show => show.ratingDetails.rating);
//
// console.log('Array of ratings:', arrayWithRatings)

/*+++++++++++++++++++++++++++ || Task2 || +++++++++++++++++++++++++++*/
// Get an array of ids

// const arrayWithIds = shows.map(show => show.id);
//
// console.log('Array of ids:', arrayWithIds)

/*+++++++++++++++++++++++++++ || Task1 || +++++++++++++++++++++++++++*/
// Get an array of all titles

// const arrayWithTitles = shows.map(show => show.title);
//
// console.log('Array of titles:', arrayWithTitles)
