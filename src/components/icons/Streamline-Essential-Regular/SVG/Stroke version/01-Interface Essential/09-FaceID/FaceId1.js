import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceId1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="face-id-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="face-id-1_svg__a"
      d="M7.5 17.007a6.68 6.68 0 009 0M6.75 6.75V9M17.25 6.75V9M12 6.75V12a1.5 1.5 0 01-1.5 1.5h-.75"
    />
  );

export default SvgFaceId1;
