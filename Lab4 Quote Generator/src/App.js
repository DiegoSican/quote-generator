import React, { useState, useEffect } from "react";
import { Button, Card, Typography, Container, Box } from "@mui/material";
import "./styles.css";

const quotes = [
  {
    text: "Al menos yo si pude salir de mi zona de confort, no como otros JAJAJA",
    author: "El Pez Diavlo",
    image: "pez_diablo1.jpg",
  },
  {
    text: "El profe: ¿Cúal es la derivada de x? Yo en 8vo Semestre de la U",
    author: "La Oveja",
    image: "oveja.jpg",
  },
  {
    text: "Esa rola me hace daño, súbele",
    author: "La ardilla ranchera",
    image: "ardilla.jpg",
  },
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      getNewQuote();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getNewQuote = () => {
    clearInterval();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <Container className="container">
      <Box textAlign="center" mb={2}>
        <Typography variant="h4" className="title">
          Generador de Citas
        </Typography>
      </Box>

      <Card className="card">
        <Box display="flex" alignItems="center">
          <img src={quote.image} className="quote-image" alt="quote" />
          <Box ml={3}>
            <Typography variant="h5">{quote.text}</Typography>
            <Typography variant="subtitle1">- {quote.author}</Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={getNewQuote}
        >
          Nueva Cita
        </Button>
      </Card>
    </Container>
  );
};

export default QuoteGenerator;
