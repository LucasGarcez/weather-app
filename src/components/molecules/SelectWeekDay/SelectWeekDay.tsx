import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Paragraph} from '@components/atoms/Text';

import {DaysOfWeek} from 'src/models/DaysOfWeek';

import {Day, DAYS} from './DAYS';
import {DayBox} from './styles';

const DAY_BOX_WIDTH = 70;

interface Props {
  value: DaysOfWeek;
  onChangeValue: (day: DaysOfWeek) => void;
}
export function SelectWeekDay({value, onChangeValue}: Props) {
  function renderItem({item}: ListRenderItemInfo<Day>) {
    return (
      <DayBox
        width={DAY_BOX_WIDTH}
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
        getItemLayout={(_, index) => {
          return {length: DAY_BOX_WIDTH, offset: DAY_BOX_WIDTH, index};
        }}
        initialScrollIndex={DAYS.findIndex(day => day.value === value)}
        data={DAYS}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
}
