import React, { FunctionComponent } from 'react';
import {Chip as MuiChip, ChipProps as MuiChipProps} from '@material-ui/core';

export interface ChipProps extends MuiChipProps {}

const Chip: FunctionComponent<ChipProps> = props => {

    return (
        <MuiChip {...props} />
    )
};

export default Chip;