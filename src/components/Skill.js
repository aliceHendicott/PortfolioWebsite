import React from "react";
import styled from "styled-components";

const SkillItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  padding: 13px;
  align-items: center;
`;

const SkillText = styled.p`
  font-size: 1.2rem;
  margin: 0 0 3px 0;
`;

const SkillLevelText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #808080;
`;

const RatingBubble = styled.div`
  display: inline-block;
  margin-left: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e8e8e8;
`;

const ActiveRatingBubble = styled(RatingBubble)`
  background-color: #8d2b58;
`;

const Rating = ({ rating }) => {
  let bubbles = [];

  for (let i = 0; i < 5; i++) {
    i < rating
      ? bubbles.push(<ActiveRatingBubble />)
      : bubbles.push(<RatingBubble />);
  }
  return bubbles.map((item) => item);
};

const Skill = ({ skill, proficiencyLevel }) => {
  const proficiencyText = [
    "Basic",
    "Basic",
    "Profficient",
    "Profficient",
    "Advanced",
  ];
  return (
    <SkillItemContainer>
      <div>
        <SkillText>{skill}</SkillText>
        <SkillLevelText>{proficiencyText[proficiencyLevel - 1]}</SkillLevelText>
      </div>
      <div>
        <Rating rating={proficiencyLevel} />
      </div>
    </SkillItemContainer>
  );
};

export default Skill;
