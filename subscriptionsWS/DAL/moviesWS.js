const URL = "https://api.tvmaze.com/shows";

const getAllMovies = async () => {
try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
} catch (error) {
    console.log(error);
}
}

export { getAllMovies };