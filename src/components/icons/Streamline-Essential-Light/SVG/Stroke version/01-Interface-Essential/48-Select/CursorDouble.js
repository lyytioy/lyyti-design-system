import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-double_svg__a"
      d="M9.6 21.724a.5.5 0 01-.9.022L1.407 7.583a.5.5 0 01.679-.671l14.589 7.751-5 2.5z"
    />,
    <path
      className="cursor-double_svg__a"
      d="M8.676 8.163l-.3-.6a.5.5 0 01.681-.663l13.762 7.311a.5.5 0 01-.011.889l-4.133 2.066-2.5 5.5-2-4"
    />
  );

export default SvgCursorDouble;
