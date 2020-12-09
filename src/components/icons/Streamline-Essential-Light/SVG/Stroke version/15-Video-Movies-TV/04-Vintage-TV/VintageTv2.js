import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTv2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vintage-tv-2_svg__a"
      d="M20.5 9.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 15.5h2M19.5 17.5h2"
    />,
    <rect
      className="vintage-tv-2_svg__a"
      x={2.5}
      y={7.5}
      width={15}
      height={12}
      rx={1}
      ry={1}
    />,
    <rect
      className="vintage-tv-2_svg__a"
      x={0.5}
      y={5.5}
      width={23}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="vintage-tv-2_svg__a"
      d="M12.5 5.5l-5-5M12.5 5.5l5-5M21.5 21.5l-1.707 1.707a1 1 0 01-.707.293H4.914a1 1 0 01-.707-.293L2.5 21.5"
    />
  );

export default SvgVintageTv2;
