const API_KEY = "178ebe1c122da5811143753bcd116188";

export const getPopularShows = async () => {
  const response = await fetch(`http://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
  if (!response.ok){
    throw new Error("Cannot get popular shows");
  }

  const shows = await response.json();
  return Promise.all(shows.results.slice(0, 10).map(show => getShow(show.id)));
};

export const getShow = async (showID) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${showID}?api_key=${API_KEY}`);
  if (!response.ok){
    throw new Error(`Cannot get show with id ${showID}`);
  }
  return response.json();
};

export const getSeason = async (showID, seasonNumber) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${showID}/season/${seasonNumber}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Cannot get show with id ${showID}`);
  }
  return response.json();
};

export const getEpisode = async (showID, seasonNumber, episodeNumber) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${showID}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Cannot get show with id ${showID}`);
  }
  return response.json();
};

export const getImageURL = (imageURL) => {
  return `https://image.tmdb.org/t/p/w500${imageURL}`;
};