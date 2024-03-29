import React from 'react';
import styled from 'styled-components';

const ClockTextColorOptionsButton = ({customColor, onPress}) => {
  return <ClockTextColorButton color={customColor} onPress={onPress} />;
};

const ClockTextColorButton = styled.TouchableOpacity`
  background-color: ${props => props.color};
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border-width: 2px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${props => props.color};
`;

export default ClockTextColorOptionsButton;
