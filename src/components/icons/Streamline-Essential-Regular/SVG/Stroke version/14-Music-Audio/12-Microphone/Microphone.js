import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="microphone_svg__a" d="M12 19.5v3.75" />,
    <rect
      className="microphone_svg__a"
      x={7.5}
      y={0.75}
      width={9}
      height={15.75}
      rx={3}
      ry={3}
    />,
    <path
      className="microphone_svg__a"
      d="M19.5 9.75V12a7.5 7.5 0 01-7.5 7.5A7.5 7.5 0 014.5 12V9.75"
    />
  );

export default SvgMicrophone;
