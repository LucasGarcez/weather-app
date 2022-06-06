import {TextProps} from 'react-native';

import styled from 'styled-components/native';
import {
  color,
  margin,
  padding,
  typography,
  ColorProps,
  MarginProps,
  PaddingProps,
  TypographyProps,
} from 'styled-system';

export type BaseTextProps = TextProps &
  ColorProps &
  MarginProps &
  PaddingProps &
  TypographyProps;

export const BaseText = styled.Text<BaseTextProps>`
  ${color};
  ${margin};
  ${padding};
  ${typography};
`;
