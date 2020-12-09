import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPin2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pin-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="pin-2_svg__a" cx={19} cy={4.999} r={4.5} />,
    <path className="pin-2_svg__a" d="M15.828 8.202L.5 23.499" />
  );

export default SvgPin2;
