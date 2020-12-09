import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTv1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-tv-1_svg__a"
      x={1.5}
      y={5.496}
      width={21}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="vintage-tv-1_svg__a"
      d="M6.5 21.496l-3 2M17.5 21.496l3 2M19.5 17.565a.5.5 0 01-.438.5A60.686 60.686 0 0112 18.5a60.686 60.686 0 01-7.062-.442.5.5 0 01-.438-.5V9.443a.5.5 0 01.438-.5A60.62 60.62 0 0112 8.5a60.62 60.62 0 017.062.443.5.5 0 01.438.5zM13.5.504l3 4.992 3-4.992"
    />
  );

export default SvgVintageTv1;
