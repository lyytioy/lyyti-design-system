import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-cash_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-cash_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-cash_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M14 8h-2.146a1.854 1.854 0 00-.829 3.512l1.95.976A1.854 1.854 0 0112.146 16H10M12 16v1.5M12 6.5V8"
    />
  );

export default SvgPhoneActionCash;
