import {ColorsType} from 'src/types/colors';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      default: number;
    };

    space: number[];
    radii: number[];

    colors: ColorsType;
  }
}
