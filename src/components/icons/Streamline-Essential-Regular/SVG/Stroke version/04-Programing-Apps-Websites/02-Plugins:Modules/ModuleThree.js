import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleThree = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-three_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="module-three_svg__a"
      x={0.75}
      y={13.5}
      width={9.75}
      height={9.75}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="module-three_svg__a"
      x={13.5}
      y={13.5}
      width={9.75}
      height={9.75}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="module-three_svg__a"
      x={7.125}
      y={0.75}
      width={9.75}
      height={9.75}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgModuleThree;
