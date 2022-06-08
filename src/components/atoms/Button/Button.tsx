import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from 'styled-components/native';

import {BoxProps} from '../Box';
import {Paragraph} from '../Text';

import {TouchableContainer, ButtonIcon, Content} from './styles';
import {variants} from './variants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  iconName?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'secondary';
}

export function Button({
  onPress,
  title,
  isLoading,
  iconName,
  disabled,
  variant = 'primary',
  ...boxProps
}: ButtonProps & BoxProps) {
  const {colors} = useTheme();

  const buttonVariant = variants[variant];

  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <TouchableContainer
      disabled={isLoading || disabled}
      onPress={onPress}
      {...buttonStyle.button}
      {...boxProps}>
      {isLoading ? (
        <ActivityIndicator color={colors[buttonStyle.icon.color]} />
      ) : (
        <Content>
          {iconName && (
            <ButtonIcon name={iconName} size={24} {...buttonStyle.icon} />
          )}
          <Paragraph
            fontWeight={'bold'}
            size={'large'}
            color={buttonStyle.title.color}>
            {title}
          </Paragraph>
        </Content>
      )}
    </TouchableContainer>
  );
}
