import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import './GameBoard.scss';

const GameBoard = ({ backSrc, cardsAmount, level, autoPlay }) => (
  <ul className={`game-board game-board--${cardsAmount}`}>
    {level.map(
      ({ cardPath, cardIndex, isFlipped, isSolved, isError }, index) => {
        const keyProp = `card-${cardIndex}-${index}`;

        return (
          <Card
            key={keyProp}
            levelIndex={index}
            cardIndex={cardIndex}
            frontSrc={cardPath}
            backSrc={backSrc}
            isFlipped={isFlipped}
            isSolved={isSolved}
            isError={isError}
            autoPlay={autoPlay}
          />
        );
      },
    )}
  </ul>
);

GameBoard.propTypes = {
  backSrc: PropTypes.string.isRequired,
  cardsAmount: PropTypes.number.isRequired,
  level: PropTypes.instanceOf(Array).isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

export default React.memo(GameBoard);
