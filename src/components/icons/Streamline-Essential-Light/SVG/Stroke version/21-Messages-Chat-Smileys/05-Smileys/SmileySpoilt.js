import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySpoilt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-spoilt_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-spoilt_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-spoilt_svg__a"
      d="M6.5 8.268a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 8.268a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.5 17.518l-1.053-2.105a.5.5 0 00-.894 0l-1.106 2.211a.5.5 0 01-.894 0l-1.106-2.211a.5.5 0 00-.894 0l-1.106 2.211a.5.5 0 01-.894 0l-1.106-2.211a.5.5 0 00-.894 0L6.5 17.518"
    />
  );

export default SvgSmileySpoilt;
