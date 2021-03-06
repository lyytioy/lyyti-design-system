import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Pdf = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M21.75 21.75a1.5 1.5 0 01-1.5 1.5h-18a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5H17.3a1.46 1.46 0 011 .43l3 2.88a1.49 1.49 0 01.45 1.07z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      d="M21.56 14.42a4.35 4.35 0 00-2.81-.66 22.43 22.43 0 00-3.38.25 8.77 8.77 0 01-1.57-1.09 11.53 11.53 0 01-2.83-4.39c0-.16.08-.3.11-.44a28.34 28.34 0 00.5-5.15 1.67 1.67 0 00-.09-.37l-.06-.15a1.19 1.19 0 00-1.11-.85h-.34a1.25 1.25 0 00-1.28.8c-.41 1.52 0 3.78.78 6.71l-.2.48c-.55 1.34-1.24 2.69-1.84 3.88l-.08.16c-.64 1.25-1.22 2.31-1.75 3.21l-.54.29s-1 .51-1.19.64C2.03 18.85.8 20.1.6 21.1a.81.81 0 00.31.91l.53.27a1.58 1.58 0 00.71.17c1.32 0 2.85-1.64 5-5.33a49.18 49.18 0 017.6-1.82 13.19 13.19 0 005.56 1.77 2.48 2.48 0 00.66-.08 1.12 1.12 0 00.65-.44 2.38 2.38 0 00.26-1.55 1 1 0 00-.32-.54z"
      fill="currentColor"
    />,
    <path
      d="M1.86 21.44a9.35 9.35 0 012.6-3.11c.09-.07.31-.28.51-.47-1.47 2.35-2.46 3.29-3.11 3.58zM10.25 2.24c.43 0 .67 1.07.69 2.07a4.23 4.23 0 01-.51 2.22 10.86 10.86 0 01-.36-2.77s0-1.52.18-1.52zM7.71 15.92c.3-.53.61-1.08.92-1.67a30.64 30.64 0 001.62-3.52A11.6 11.6 0 0012.9 14c.13.11.26.22.41.33a35 35 0 00-5.59 1.56zM21.15 15.8a1.93 1.93 0 01-.74.13 8.59 8.59 0 01-3.06-.93c.51 0 1-.05 1.41-.05a5.26 5.26 0 011.76.19c.75.19.76.58.63.66z"
      fill="#fff"
    />
  );

export default Pdf;
