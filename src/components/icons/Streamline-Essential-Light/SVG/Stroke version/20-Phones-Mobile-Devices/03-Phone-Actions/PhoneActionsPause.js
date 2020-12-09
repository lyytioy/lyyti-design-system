import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-pause_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-pause_svg__a"
      d="M7.992 9.514a2 2 0 000-2.829L5.87 4.564a2 2 0 00-2.828 0L1.878 5.727A3 3 0 001.5 9.5a46.5 46.5 0 0013 13 3 3 0 003.774-.379l1.163-1.163a2 2 0 000-2.828l-2.12-2.121a2 2 0 00-2.829 0l-.707.707a47.538 47.538 0 01-6.5-6.5z"
    />,
    <rect
      className="phone-actions-pause_svg__a"
      x={15}
      y={1}
      width={3}
      height={9}
      rx={1}
      ry={1}
    />,
    <rect
      className="phone-actions-pause_svg__a"
      x={20}
      y={1}
      width={3}
      height={9}
      rx={1}
      ry={1}
    />
  );

export default SvgPhoneActionsPause;
