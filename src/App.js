import { useState } from "react";
import { Play } from "lucide-react";
import { Card, CardContent, CardOverlay } from "./components/ui/card";
import "./App.css";

const movies = {
  trending: [
    { 
      id: 1, 
      title: "Inception", 
      poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", 
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      description: "A thief who steals corporate secrets through dream-sharing technology."
    },
    { 
      id: 2, 
      title: "Interstellar", 
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", 
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      description: "A team of explorers travel through a wormhole in space."
    },
    { 
      id: 7, 
      title: "The Dark Knight", 
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", 
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
      description: "Batman faces the Joker, a criminal mastermind seeking to plunge Gotham into anarchy."
    },
    { 
      id: 8, 
      title: "Avengers: Endgame", 
      poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", 
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
      description: "The Avengers take one final stand against Thanos in this epic conclusion."
    },
    { 
      id: 9, 
      title: "Spider-Man: No Way Home", 
      poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", 
      trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
      description: "Spider-Man's identity is revealed, and he seeks help from Doctor Strange."
    },
    { 
      id: 26, 
      title: "Black Panther", 
      poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg", 
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
      description: "T'Challa returns home to Wakanda to take his rightful place as king."
    },
    { 
      id: 27, 
      title: "Top Gun: Maverick", 
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg", 
      trailer: "https://www.youtube.com/embed/qSqVVswa420",
      description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator."
    }
  ],
  action: [
    { 
      id: 3, 
      title: "Mad Max: Fury Road", 
      poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", 
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler."
    },
    { 
      id: 4, 
      title: "John Wick", 
      poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", 
      trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
      description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog."
    },
    { 
      id: 10, 
      title: "Mission: Impossible - Fallout", 
      poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", 
      trailer: "https://www.youtube.com/embed/wb49-oV0F78",
      description: "Ethan Hunt and his IMF team race against time after a mission gone wrong."
    },
    { 
      id: 11, 
      title: "The Bourne Ultimatum", 
      poster: "https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg", 
      trailer: "https://www.youtube.com/embed/ZT2ZxjUjSo0",
      description: "Jason Bourne races to uncover the final mysteries of his past."
    },
    { 
      id: 12, 
      title: "Die Hard", 
      poster: "https://m.media-amazon.com/images/I/71H9VpOVjVL.jpg", 
      trailer: "https://www.youtube.com/embed/2TQ-pOvI6Xo",
      description: "A New York cop battles terrorists during a Christmas party at Nakatomi Plaza."
    },
    { 
      id: 28, 
      title: "The Batman", 
      poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg", 
      trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
      description: "Batman uncovers corruption in Gotham City while pursuing the Riddler."
    },
    { 
      id: 29, 
      title: "Fast & Furious 7", 
      poster: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_.jpg", 
      trailer: "https://www.youtube.com/embed/Skpu5HaVkOc",
      description: "Deckard Shaw seeks revenge against Dominic Toretto and his family."
    }
  ],
  comedy: [
    {
      id: 5,
      title: "Superbad",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_FMjpg_UX1000_.jpg",
      trailer: "https://www.youtube.com/embed/MNpoTxeydiY",
      description: "Two co-dependent high school seniors are forced to deal with separation anxiety."
    },
    {
      id: 6,
      title: "The Grand Budapest Hotel",
      poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
      trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk",
      description: "The adventures of Gustave H, a legendary concierge at a famous hotel."
    },
    {
      id: 13,
      title: "Step Brothers",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvc3dIJ3l2zIK-7ihrVgaxoNdQIX6xfk_yUQ&s",
      trailer: "https://www.youtube.com/embed/CewglxElBK0",
      description: "Two grown men become stepbrothers and start behaving like children."
    },
    {
      id: 14,
      title: "The Hangover",
      poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      trailer: "https://www.youtube.com/embed/tcdUhdOlz9M",
      description: "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night."
    },
    {
      id: 15,
      title: "Bridesmaids",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOLFpAZKi597NQlzTUfcjSgE5IkLpYTbg4g&s",
      trailer: "https://www.youtube.com/embed/FNppLrmdyug",
      description: "Competition between the maid of honor and a bridesmaid threatens to upend the life of an out-of-work pastry chef."
    },
    {
      id: 30,
      title: "21 Jump Street",
      poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FupAAAOSwDKtglLqI%2Fs-l1600.jpg&f=1&nofb=1&ipt=052b77440fff5623f1b5a3977ec718d886dbad16c03c89a074453ce811415645",
      trailer: "https://www.youtube.com/embed/RLoKtb4c4W0",
      description: "Two cops are forced to relive high school when they go undercover as students."
    },
    {
      id: 31,
      title: "Ted",
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/9fbo_pQvU7M",
      description: "A grown man must deal with the cherished teddy bear who came to life as the result of a childhood wish."
    }
  ],
  drama: [
    {
      id: 16,
      title: "The Shawshank Redemption",
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      id: 17,
      title: "Forrest Gump",
      poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      trailer: "https://www.youtube.com/embed/bLvqoHBptjg",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man."
    },
    {
      id: 18,
      title: "The Godfather",
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      trailer: "https://www.youtube.com/embed/UaVTIH8mujA",
      description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
    },
    {
      id: 19,
      title: "Fight Club",
      poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      trailer: "https://www.youtube.com/embed/qtRKdVHc-cE",
      description: "An insomniac office worker forms an underground fight club as a form of male bonding."
    },
    {
      id: 20,
      title: "Parasite",
      poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    },
    {
      id: 32,
      title: "The Social Network",
      poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/lB95KLmpLR4",
      description: "Harvard student Mark Zuckerberg creates the social networking site that would become Facebook."
    },
    {
      id: 33,
      title: "La La Land",
      poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
      description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
    }
  ],
  scifi: [
    {
      id: 21,
      title: "The Matrix",
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
      description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers."
    },
    {
      id: 22,
      title: "Blade Runner 2049",
      poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      trailer: "https://www.youtube.com/embed/gCcx85zbxz4",
      description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard."
    },
    {
      id: 23,
      title: "Dune",
      poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      trailer: "https://www.youtube.com/embed/8g18jFHCLXk",
      description: "Paul Atreides leads nomadic tribes in a revolt against the galactic emperor."
    },
    {
      id: 24,
      title: "Arrival",
      poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
      trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g",
      description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world."
    },
    {
      id: 25,
      title: "Guardians of the Galaxy",
      poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
    },
    {
      id: 34,
      title: "Star Wars: The Force Awakens",
      poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/sGbxmsDFVnE",
      description: "Three decades after the Empire's defeat, a new threat arises in the militant First Order."
    },
    {
      id: 35,
      title: "The Martian",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/ej3ioOneTy8",
      description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive."
    }
  ]
};
export default function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const playTrailer = (movie) => {
    setSelectedMovie(movie);
    setTrailerUrl(movie.trailer);
  };

  const closeTrailer = () => {
    setTrailerUrl("");
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">MiniFlix</h1>
          <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input" 
          />
        </div>
      </header>

      {/* Hero Banner */}
      <section 
        className="hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${movies.trending[0].poster})` }}
      >
        <div className="hero-content">
          <h2 className="hero-title">{movies.trending[0].title}</h2>
          <p className="hero-description">{movies.trending[0].description}</p>
          <button
            onClick={() => playTrailer(movies.trending[0])}
            className="play-button"
          >
            <Play size={20} /> Play Now
          </button>
        </div>
      </section>

      {/* Movie Categories */}
      <main className="main-content">
        {Object.entries(movies).map(([category, list]) => (
          <section key={category} className="movie-section">
            <div className="section-header">
              <h3 className="section-title">{category.toUpperCase()}</h3>
              <div className="section-line"></div>
            </div>
            <div className="movie-row custom-scrollbar">
              {list.map(movie => (
                <Card 
                  key={movie.id} 
                  className="movie-card"
                  onClick={() => playTrailer(movie)}
                >
                  <CardContent>
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <CardOverlay>
                      <div className="movie-info">
                        <h4 className="movie-title">{movie.title}</h4>
                        <button className="play-icon-button">
                          <Play size={16} />
                        </button>
                      </div>
                    </CardOverlay>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Trailer Modal */}
      {trailerUrl && (
        <div className="modal-overlay" onClick={closeTrailer}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {selectedMovie?.title} - Trailer
              </h3>
              <button
                onClick={closeTrailer}
                className="close-button"
              >
                ✖
              </button>
            </div>
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src={trailerUrl}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}