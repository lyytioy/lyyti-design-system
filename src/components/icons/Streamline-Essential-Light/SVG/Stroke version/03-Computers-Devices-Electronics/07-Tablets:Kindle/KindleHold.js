import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindleHold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".kindle-hold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="kindle-hold_svg__a"
      d="M7.5 19.5h2M14 21.505H2A1.512 1.512 0 01.5 20V2A1.505 1.505 0 012 .5h13A1.5 1.5 0 0116.5 2v13.5"
    />,
    <path
      className="kindle-hold_svg__a"
      d="M15.231 17.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v10.937M23.5 23.5l-3-4v-4.559c0-1.694-2.081-3.3-4-4.941"
    />,
    <path
      className="kindle-hold_svg__a"
      d="M17.5 16.5l-2.25-2.25a1.061 1.061 0 00-1.5 0 1.248 1.248 0 000 1.5L16.5 19v1c0 1 2 3.5 2 3.5M5.5 12.5h6M5.5 9.5h6M5.5 6.5h4"
    />
  );

export default SvgKindleHold;
