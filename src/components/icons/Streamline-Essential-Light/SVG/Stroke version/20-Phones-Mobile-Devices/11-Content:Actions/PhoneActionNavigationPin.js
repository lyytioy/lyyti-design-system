import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionNavigationPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-navigation-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-navigation-pin_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-action-navigation-pin_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-navigation-pin_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M12 10.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-action-navigation-pin_svg__a"
      d="M12 7.5a3 3 0 013 3c0 1.28-1.792 3.717-2.606 4.759a.5.5 0 01-.788 0C10.792 14.218 9 11.781 9 10.5a3 3 0 013-3z"
    />
  );

export default SvgPhoneActionNavigationPin;
