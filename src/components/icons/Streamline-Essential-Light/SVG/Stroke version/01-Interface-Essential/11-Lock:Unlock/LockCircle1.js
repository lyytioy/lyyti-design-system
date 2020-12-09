import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-circle-1_svg__a" cx={12.004} cy={12.03} r={11.5} />,
    <path
      className="lock-circle-1_svg__a"
      d="M16.528 16.509a1 1 0 01-.995 1l-7 .032a1 1 0 01-1-1l-.023-5a1 1 0 011-1l7-.032a1 1 0 011 1z"
    />,
    <path
      className="lock-circle-1_svg__a"
      d="M12.013 13.03a1 1 0 101.005 1 1 1 0 00-1.005-1zM9.5 10.541l-.008-1.5a2.5 2.5 0 015-.022l.008 1.5"
    />
  );

export default SvgLockCircle1;
