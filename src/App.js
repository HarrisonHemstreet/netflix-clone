import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title= 'Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title= 'Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title= 'Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title= 'Comedies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title= 'Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title= 'Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title= 'Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
