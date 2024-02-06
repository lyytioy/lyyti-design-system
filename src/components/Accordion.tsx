import { forwardRef, Ref } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionProps as MuiAccordionProps,
  Typography,
  AccordionDetails,
  TypographyProps,
} from '@mui/material';
import { ExpandMoreRounded } from '../icons';

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
      fontSize: '16px',
    },
    expandIcon = <ExpandMoreRounded />,
    expandIconInline,
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
          '& .MuiAccordionSummary-content': { flexGrow: expandIconInline ? 0 : 1 },
          '& .MuiSvgIcon-root': {
            color: 'text.primary',
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
