import React from 'react';

import {Heading, Paragraph} from '@components/atoms/Text';
import {BoxCard} from '@components/molecules/BoxCard/BoxCard';

interface Props {
  title: string;
  items: {
    label: string;
    value: string | number;
  }[];
}
export function InfoList({title, items}: Props) {
  return (
    <>
      <Heading mb={3}>{title}</Heading>
      <BoxCard padding={4}>
        {items.map(item => {
          return (
            <Paragraph key={item.label}>
              <Paragraph fontWeight="bold">{item.label}: </Paragraph>
              {item.value}
            </Paragraph>
          );
        })}
      </BoxCard>
    </>
  );
}
