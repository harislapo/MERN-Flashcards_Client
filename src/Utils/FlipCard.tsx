import './FlipCard.css';

const FlipCard = (props: any) => {
  return (
    <div className="FlipCard">
      <div className="FlipCardFront">{props.card.question}</div>
      <div className="FlipCardBack">{props.card.answer}</div>
    </div>
  );
};

export default FlipCard;
