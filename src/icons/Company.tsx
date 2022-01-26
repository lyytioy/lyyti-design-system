import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Company = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.office_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      d="M19.67 10.31zM22.38 23H4.67c-.51 0-.93-.77-.93-1.71V2.47c0-1 .42-1.72.93-1.72h10.21v8.56M19.67 10.31z"
      transform="translate(-2.99)"
      className="office_svg__a"
    />,
    <path
      d="M19.67 15.19V23h-5.79a.89.89 0 01-.76-1V11.29a.89.89 0 01.76-1h5.39"
      transform="translate(-2.99)"
      className="office_svg__a"
    />,
    <path
      className="office_svg__a"
      d="M13 23h1.68M11.38 4.25H6.81M11.38 7.28H9.01M16.38 12.28h-2.37"
    />,
    <path
      d="M10.41 23v-2.88c0-1-.62-1.87-1.39-1.87H8.8c-.77 0-1.39.84-1.39 1.87V23M17.67 23v-2.21a1.31 1.31 0 00-1.11-1.44h-.18a1.31 1.31 0 00-1.12 1.44V23"
      transform="translate(-2.99)"
      className="office_svg__a"
    />
  );

export default Company;
