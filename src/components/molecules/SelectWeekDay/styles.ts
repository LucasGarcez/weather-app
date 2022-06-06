import {PressableBox} from '@components/atoms/Box';
import styled from 'styled-components/native';

type DayBoxProps = {
  isSelected: boolean;
};
export const DayBox = styled(PressableBox)<DayBoxProps>`
  align-items: center;
  padding: ${({theme}) => theme.space[2]}px;
  border-radius: ${({theme}) => theme.radii[4]}px;
  background-color: ${({theme, isSelected}) =>
    isSelected ? theme.colors.primary : theme.colors.transparent};
  width: 70px;
`;
