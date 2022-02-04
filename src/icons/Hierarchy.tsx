import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Hierarchy = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.hierarchy-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect
      className="hierarchy-2_svg__a"
      x={9.75}
      y={18.748}
      width={13.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="hierarchy-2_svg__a"
      x={9.75}
      y={11.248}
      width={13.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="hierarchy-2_svg__a"
      x={0.75}
      y={0.748}
      width={13.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="hierarchy-2_svg__a"
      d="M6.75 5.248v1.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 011.5 1.5v1.5M17.25 15.748v3"
    />
  );

export default Hierarchy;
