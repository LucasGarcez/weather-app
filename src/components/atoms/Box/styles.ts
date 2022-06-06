import styled from 'styled-components/native';
import {
  margin,
  MarginProps,
  padding,
  PaddingProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  border,
  BordersProps,
  position,
  PositionProps,
} from 'styled-system';

export type BoxProps = FlexboxProps &
  MarginProps &
  PaddingProps &
  ColorProps &
  LayoutProps &
  BordersProps &
  PositionProps;

export const Box = styled.View<BoxProps>`
  ${flexbox};
  ${margin};
  ${padding};
  ${layout};
  ${color};
  ${border};
  ${position};
`;
