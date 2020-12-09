import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySadCrying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sad-crying_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-sad-crying_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-sad-crying_svg__a"
      d="M8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M19 12.5a1.5 1.5 0 01-3 0c0-.828 1.5-3 1.5-3s1.5 2.172 1.5 3zM7.5 19a4.5 4.5 0 019 0"
    />
  );

export default SvgSmileySadCrying;
