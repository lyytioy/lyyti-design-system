import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrow2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrow-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrow-2_svg__a"
      d="M13.5 21.747A9.75 9.75 0 103.75 12v.75"
    />,
    <path className="synchronize-arrow-2_svg__a" d="M.75 9.747l3 3 3-3" />,
    <circle
      className="synchronize-arrow-2_svg__a"
      cx={13.5}
      cy={11.997}
      r={2.25}
    />
  );

export default SvgSynchronizeArrow2;
