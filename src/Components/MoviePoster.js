import React, { useEffect, useState } from "react";
import poster from "../assets/poster.jpg";

const MoviePoster = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const animateCard = async () => {
      await delay(400);

      setIsLoaded(true);
    };

    animateCard();
  }, []);

  const moviePosterStyle = {
    height: "21rem",
    borderRadius: "4%",
    position: "absolute",
    top: "35%",
    left: "10%",
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-15deg)",
    transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
  };

  return (
    <div>
      <img src={poster} style={moviePosterStyle} alt="Movie Poster" />
    </div>
  );
};

export default MoviePoster;
