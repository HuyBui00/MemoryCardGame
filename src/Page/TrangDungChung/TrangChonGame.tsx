import React, { useState, useEffect } from "react";
import ReturnBarMenu from "../../Utilities/Components/ReturnBarMenu";

const generateCards = () => {
  const icons = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝", "🍑", "🍉"];
  const cards = [...icons, ...icons]
    .sort(() => Math.random() - 0.5)
    .map((icon, index) => ({
      id: index,
      icon,
      flipped: false,
      matched: false,
    }));
  return cards;
};

export default function TrangChonGame() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState(0);

  const handleFlip = (id: number) => {
    if (flippedCards.length === 2 || win) return;
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, flipped: true } : card))
    );
    setFlippedCards((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = flippedCards;
      setCards((prevCards) => {
        const firstCard = prevCards.find((c) => c.id === first);
        const secondCard = prevCards.find((c) => c.id === second);

        if (firstCard && secondCard && firstCard.icon === secondCard.icon) {
          // ✅ giống nhau → matched
          return prevCards.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          );
        } else {
          // ❌ khác nhau → úp lại sau 1s
          setTimeout(() => {
            setCards((prev) =>
              prev.map((card) =>
                card.id === first || card.id === second
                  ? { ...card, flipped: false }
                  : card
              )
            );
          }, 1000);
          return prevCards;
        }
      });
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (cards.every((c) => c.matched)) {
      console.log("hello");
      setWin(true);
    }
  }, [cards]);

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setWin(false);
    setMoves(0);
  };

  return (
    <div className="container text-center mt-4">
      <h2 className="mb-3">🎮 Trò chơi Lật Thẻ</h2>
      <ReturnBarMenu />

      <div className="mb-3">
        <span className="badge bg-info fs-6 me-2">Số lượt: {moves}</span>
      </div>

      {win && (
        <div className="alert alert-success mt-3">
          🎉 Chúc mừng! Bạn đã thắng sau <b>{moves}</b> lượt!
          <br />
          <button className="btn btn-primary mt-2" onClick={resetGame}>
            🔄 Chơi lại
          </button>
        </div>
      )}

      <div
        className="d-grid gap-2"
        style={{
          gridTemplateColumns: "repeat(4, 90px)",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <button
            key={card.id}
            className={`btn border fw-bold d-flex align-items-center justify-content-center ${
              card.flipped || card.matched ? "btn-light" : "btn-primary"
            }`}
            style={{
              width: "90px",
              height: "90px",
              fontSize: "2rem",
              borderRadius: "10px",
            }}
            onClick={() =>
              !card.flipped && !card.matched && handleFlip(card.id)
            }
          >
            {card.flipped || card.matched ? card.icon : "❓"}
          </button>
        ))}
      </div>
    </div>
  );
}
