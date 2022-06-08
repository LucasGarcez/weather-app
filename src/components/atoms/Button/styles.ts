import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import {ColorsType} from 'src/types/colors';

import {TouchableBox} from '../Box';

export const TouchableContainer = styled(TouchableBox)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: ${({theme}) => theme.radii[4]}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type ButtonIConProps = {
  color: keyof ColorsType;
};
export const ButtonIcon = styled(Icon)<ButtonIConProps>`
  margin-right: ${({theme}) => theme.space[3]};
  color: ${({theme, color}) => theme.colors[color]};
`;
