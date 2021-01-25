import React, { FunctionComponent } from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core';

export type ColorTypes = 'primary' | 'secondary';

export type ChipProps = MuiChipProps & { color: ColorTypes };

const Chip: FunctionComponent<ChipProps> = (props) => {
  return <MuiChip {...props} />;
};

export default Chip;
