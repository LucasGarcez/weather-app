import React, {ComponentProps} from 'react';

import {render} from '@testing-library/react-native';
import {ComponentWrapper} from 'testUitls/ComponentWrapper';

import {InfoList} from '../InfoList';

function renderComponent(props: ComponentProps<typeof InfoList>) {
  return render(
    <ComponentWrapper>
      <InfoList {...props} />
    </ComponentWrapper>,
  );
}

describe('InfoList', () => {
  const title = 'List Title';
  const items = [
    {label: 'item1', value: '1'},
    {label: 'item2', value: '2'},
  ];
  it('show title', () => {
    const {getByText} = renderComponent({title, items});
    expect(getByText(title)).toBeTruthy();
  });
  it('show all item', () => {
    const {getByText} = renderComponent({title, items});
    expect(getByText(title)).toBeTruthy();
  });
});
