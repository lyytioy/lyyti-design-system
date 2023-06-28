import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const ParticipantFictional = (props: any) => {
  const theme = useTheme();

  return createElement(
    SvgIcon,
    props,
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill="none"
      d="M7.7 13.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM12.4 16.6c-2.7-2.6-6.9-2.6-9.5.1C1.7 18 1 19.7 1 21.4"
    />,
    <path
      fill={theme.palette.secondary.dark}
      d="m12.82 19.605-1.312.872-.33 1.334 1.324-.333.877-1.315-.56-.558Zm1.154-1.093.498.497.073-.025c.745-.265 1.494-.809 2.245-1.658.905-1.024 2.433-2.847 4.576-5.46a.167.167 0 0 0-.121-.274.168.168 0 0 0-.115.038c-2.612 2.137-4.438 3.664-5.47 4.57-.855.751-1.399 1.499-1.66 2.238l-.026.074Zm-.489 4.354L9 24l1.113-4.501 2.388-1.59c.36-1.014 1.062-1.98 2.109-2.9 1.05-.922 2.887-2.458 5.514-4.607a1.758 1.758 0 0 1 2.874 1.27c.02.436-.123.864-.401 1.2-2.155 2.627-3.693 4.46-4.614 5.504-.919 1.04-1.887 1.74-2.903 2.103l-1.595 2.387Z"
    />
  );
};

export default ParticipantFictional;
