import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CardContainer(cards) {
    console.log(cards)
        let cardData = cards.cards.props;
        console.log(cardData)
  return (
            <motion.div initial={{ opacity: 0 , y: 100 }} animate={{ opacity: 1 , y: 0 }} transition={{ duration: 0.5 }}>
    <Container>
      {cardData.map((card, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1,shadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }} transition={{ duration: 0.5 }}>
          <Card>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
          </Card>
        </motion.div>
      ))}
    </Container>
    </motion.div>
  );
}
