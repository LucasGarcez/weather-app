import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Paragraph} from '@components/atoms/Text';

import {DaysOfWeek} from 'src/models/DaysOfWeek';

import {Day, DAYS} from './DAYS';
import {DayBox} from './styles';

interface Props {
  value: DaysOfWeek;
  onChangeValue: (day: DaysOfWeek) => void;
}
export function SelectWeekDay({value, onChangeValue}: Props) {
  function renderItem({item}: ListRenderItemInfo<Day>) {
    return (
      <DayBox
        key={item.value}
        onPress={() => onChangeValue(item.value)}
        isSelected={value === item.value}>
        <Paragraph>{item.label}</Paragraph>
      </DayBox>
    );
  }

  return (
    <Box>
      <FlatList
        data={DAYS}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
}
