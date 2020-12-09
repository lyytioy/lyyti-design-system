import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlignPortrait = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".align-portrait_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="align-portrait_svg__a"
      d="M3.75 23.248V.748M.75 3.748l3-3 3 3"
    />,
    <rect
      className="align-portrait_svg__a"
      x={9.75}
      y={2.248}
      width={13.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="align-portrait_svg__a" cx={16.5} cy={9.373} r={2.625} />,
    <path className="align-portrait_svg__a" d="M12 17.248a4.5 4.5 0 119 0z" />
  );

export default SvgAlignPortrait;
