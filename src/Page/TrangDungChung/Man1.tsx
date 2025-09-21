import { useState, useEffect } from "react";

const generateCards = () => {
  // const icons = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝", "🍑", "🍉"]; // 8 cặp
  const icons = ["🍎", "🍌"]; // 8 cặp
  const cards = [...icons, ...icons] // 16 thẻ
    .sort(() => Math.random() - 0.5) // xáo trộn
    .map((icon, index) => ({
      id: index,
      icon,
      flipped: false,
      matched: false,
    }));
  return cards;
};

export default function Man1() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // xử lý khi lật thẻ
  const handleFlip = (id: number) => {
    if (flippedCards.length === 2) return; // không cho lật thêm nếu đã có 2 thẻ
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, flipped: true } : card))
    );
    setFlippedCards((prev) => [...prev, id]);
  };

  // kiểm tra 2 thẻ đã lật
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find((c) => c.id === first);
      const secondCard = cards.find((c) => c.id === second);

      if (firstCard && secondCard && firstCard.icon === secondCard.icon) {
        // nếu giống nhau -> matched
        setCards((prev) =>
          prev.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          )
        );
      } else {
        // nếu khác nhau -> úp lại sau 1s
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards]);

  return (
    <div className="container text-center mt-4">
      <h2>Màn 1</h2>
      <div
        className="d-grid gap-2"
        style={{
          gridTemplateColumns: "repeat(4, 80px)",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="border d-flex align-items-center justify-content-center"
            style={{
              width: "80px",
              height: "80px",
              fontSize: "2rem",
              cursor: "pointer",
              backgroundColor:
                card.flipped || card.matched ? "#fff" : "#007bff",
              color: card.flipped || card.matched ? "#000" : "transparent",
            }}
            onClick={() =>
              !card.flipped && !card.matched && handleFlip(card.id)
            }
          >
            {card.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
