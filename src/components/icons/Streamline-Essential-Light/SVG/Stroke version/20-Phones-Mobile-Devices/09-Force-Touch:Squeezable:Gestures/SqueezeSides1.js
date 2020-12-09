import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSqueezeSides1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".squeeze-sides-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="squeeze-sides-1_svg__a"
      d="M18.5 19.5h-13M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="squeeze-sides-1_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="squeeze-sides-1_svg__a"
      d="M16.5 16.2a6 6 0 010-10.4M16.5 13.645a4 4 0 010-5.291M7.5 16.2a6 6 0 000-10.4M7.5 13.645a4 4 0 000-5.291"
    />
  );

export default SvgSqueezeSides1;
