import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceId1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="face-id-1_svg__a"
      d="M12 8v4.5a1.5 1.5 0 01-1.5 1.5H10M7 8v2.5M17 8v2.5M7.733 17a5.48 5.48 0 007.534 0"
    />,
    <circle className="face-id-1_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgFaceId1;
