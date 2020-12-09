import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-1_svg__a"
      d="M12 .499v23M7 5.499l5-5 5 5M7 18.499l5 5 5-5"
    />
  );

export default SvgExpandVertical1;
