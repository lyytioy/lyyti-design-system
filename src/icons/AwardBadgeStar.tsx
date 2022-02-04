import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const SvgAwardBadgeStar1 = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.award-badge-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="award-badge-star-1_svg__a"
      d="M12.7 12.434l1.665 3.319h2.85a.775.775 0 01.544 1.328l-2.433 1.669 1.266 3.393a.789.789 0 01-1.11 1L12 21.184l-3.491 1.961a.789.789 0 01-1.11-1L9 18.75l-2.76-1.659a.781.781 0 01.548-1.338h2.835l1.665-3.319a.793.793 0 011.412 0z"
    />,
    <path
      className="award-badge-star-1_svg__a"
      d="M8.25.75a1.5 1.5 0 00-1.5 1.5v5.228A1.5 1.5 0 007.378 8.7L12 12l4.622-3.3a1.5 1.5 0 00.628-1.221V2.25a1.5 1.5 0 00-1.5-1.5zM12 .75V12"
    />
  );

export default SvgAwardBadgeStar1;
