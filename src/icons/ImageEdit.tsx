import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ImageEdit = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.retouch-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="retouch-landscape_svg__a"
      d="M23.25 13.125L15.787 5.62M12.497 2.33l1.383 1.383M16.468 1.125l-.382 1.919M19.676 3.758l-1.808.748M11.292 6.301l1.919-.382M13.925 9.508l.749-1.807M18.75 13.125V21.5a1.38 1.38 0 01-1.385 1.375H2.135A1.38 1.38 0 01.75 21.5V7.75a1.38 1.38 0 011.385-1.375H8.25"
    />,
    <path
      className="retouch-landscape_svg__a"
      d="M4.875 10.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M3.75 19.875l4.871-5.567a1.5 1.5 0 012.258 0l4.871 5.567"
    />
  );

export default ImageEdit;
