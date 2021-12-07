const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array} of movie objects
 */
function getOnlyGoodMovies(){
    const Movies = movies.filter(item => item.metascore >= 80);
    return JSON.stringify(Movies)
}

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array} of strings
 */
 function getGoodImdbLinks(){
    // complete with your code
    return movies.map(item => `https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm${item.imdb_title_id}`);
   
}

function main(){
    const goodMovies = getOnlyGoodMovies();
    const goodLinks = getGoodImdbLinks();
    console.log(`Only movies with metascore of 80 or higher:\n${goodMovies}\n`);
    console.log(`IMDb links of those good movies:\n${goodLinks}\n`);
}

main();