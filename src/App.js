import { useState, useEffect } from "react";
import { shuffle } from "./utilities/shuffle";
import Card from "./components/Card";
import Header from "./components/Header";
import Modes from "./components/Modes";
import useAppBadge from "./hooks/useAppBadge";

function App() {
  const [cards, setCards] = useState(shuffle("animals")); // Cards array from assets
  const [pickOne, setPickOne] = useState(null); // First selection
  const [pickTwo, setPickTwo] = useState(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [wins, setWins] = useState(0); // Win streak
  const [setBadge, clearBadge] = useAppBadge(); //handles app badge

  const [gameStart, setGameStart] = useState(false);

  const [cardBack, setCardBack] = useState("/assets/cartoon-paw.jpg");

  // Handle card selection
  const handleClick = (card) => {
    console.log(card);
    if (!gameStart) {
      setGameStart(true);
    }
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  const handleNewGame = () => {
    clearBadge();
    setWins(0);
    handleTurn();
    setCards(shuffle);
  };

  const handleLoseGame = () => {
    setTimeout(() => {
      alert("You lost! Your streak will be reset. Try Again!");
    }, 100);
    clearBadge();
    setWins(0);
    handleTurn();
    setCards(shuffle);
    setGameStart(false);
  };

  const handleChangeTheme = (theme) => {
    setCards(shuffle(theme));
    if (theme === "programming") {
      setCardBack("/assets/stack.png");
    } else {
      setCardBack("/assets/cartoon-paw.jpg");
    }
  };

  // Used for selection and match handling
  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if the cards the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

  // If player has found all matches, handle accordingly
  useEffect(() => {
    // Check for any remaining card matches
    const checkWin = cards.filter((card) => !card.matched);

    // All matches made, handle win/badge counters
    if (cards.length && checkWin.length < 1) {
      setWins(wins + 1);
      handleTurn();
      setTimeout(() => {
        alert("You win!");
      }, 100);
      setBadge();
      setCards(shuffle);
      setGameStart(false);
    }
  }, [cards, wins, setBadge]);

  return (
    <div className="container">
      <Header handleNewGame={handleNewGame} wins={wins} />
      <main id="content">
        <div className="grid">
          {cards.map((card) => {
            const { image, id, matched } = card;
            return (
              <Card
                key={id}
                image={image}
                selected={card === pickOne || card === pickTwo || matched}
                onClick={() => handleClick(card)}
                cardBack={cardBack}
              />
            );
          })}
        </div>
        <Modes
          gameStart={gameStart}
          handleLoseGame={handleLoseGame}
          handleChangeTheme={handleChangeTheme}
        />
      </main>
    </div>
  );
}

export default App;
