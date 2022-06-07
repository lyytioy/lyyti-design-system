import React, { forwardRef, Ref } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionProps as MuiAccordionProps,
  Typography,
  AccordionDetails,
  TypographyProps,
} from '@mui/material';
import { ChevronDown } from '../icons';

export interface AccordionProps extends MuiAccordionProps {
  title: string;
  titleProps?: TypographyProps;
  expandIcon?: JSX.Element;
  expandIconInline?: boolean;
}

const Accordion = (
  {
    title,
    titleProps = {
      fontSize: '24px',
    },
    expandIcon = <ChevronDown sx={{ color: 'text.primary' }} />,
    expandIconInline,
    elevation = 0,
    children,
    sx,
    ...props
  }: AccordionProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {

  const fontSize = titleProps.fontSize + typeof titleProps.fontSize === 'number' ? 'px' : '';
  const iconSize = `calc(${fontSize} * 0.75)`

  return (
    <MuiAccordion ref={ref} elevation={elevation} sx={sx} {...props}>
      <AccordionSummary
        expandIcon={expandIcon}
        sx={{
          justifyContent: 'flex-start',
          columnGap: 2,
          '& .MuiAccordionSummary-content': { flexGrow: expandIconInline ? 0 : 1 },
          '& .MuiSvgIcon-root': {
            fontSize: iconSize,
          },
        }}
      >
        <Typography fontWeight="bold" {...titleProps}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

export default forwardRef(Accordion);
