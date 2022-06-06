import {ColorsType} from 'src/types/colors';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[];
    radii: number[];

    colors: ColorsType;
  }
}
