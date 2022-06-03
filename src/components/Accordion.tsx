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
  expandIcon?: React.ReactNode;
}

const Accordion = (
  {
    title,
    titleProps = {},
    expandIcon = <ChevronDown sx={{ color: 'text.primary' }} />,
    elevation = 0,
    children,
    sx,
    ...props
  }: AccordionProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiAccordion ref={ref} elevation={elevation} sx={sx} {...props}>
      <AccordionSummary
        expandIcon={expandIcon}
        sx={{
          justifyContent: 'flex-start',
          columnGap: 2,
          '& .MuiAccordionSummary-content': { flexGrow: 0 },
        }}
      >
        <Typography fontWeight="bold" fontSize="24px" {...titleProps}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

export default forwardRef(Accordion);
