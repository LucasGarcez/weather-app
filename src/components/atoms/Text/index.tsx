import React from 'react';

import {DefaultTheme, useTheme} from 'styled-components';

import {typographySizes} from './sizes';
import {BaseText, BaseTextProps} from './styles';

type TextSizes = 'small' | 'default' | 'large';
export type TextProps = {
  size?: TextSizes;
  color?: keyof DefaultTheme['colors'];
} & Omit<BaseTextProps, 'color'>;

export function Paragraph({
  size = 'default',
  color = 'onBackground',
  ...rest
}: TextProps): JSX.Element {
  const {colors} = useTheme();

  return (
    <BaseText
      opacity={0.87}
      color={colors[color]}
      fontSize={typographySizes.paragraph[size].fontSize}
      lineHeight={typographySizes.paragraph[size].lineHeight}
      {...rest}
    />
  );
}
export function Heading({
  size = 'default',
  color = 'primary',
  ...rest
}: TextProps): JSX.Element {
  const {colors} = useTheme();

  return (
    <BaseText
      color={colors[color]}
      fontSize={typographySizes.heading[size].fontSize}
      lineHeight={typographySizes.heading[size].lineHeight}
      {...rest}
    />
  );
}
