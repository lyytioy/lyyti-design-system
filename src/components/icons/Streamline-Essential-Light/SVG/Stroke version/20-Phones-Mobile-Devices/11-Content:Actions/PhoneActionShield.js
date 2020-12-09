import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-shield_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-shield_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-shield_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M12 11v3M10.5 12.5h3M12.357 16.432l.369-.141a4.4 4.4 0 002.774-4.225V9.8a.694.694 0 00-.419-.638 7.431 7.431 0 00-3.095-.662 7.272 7.272 0 00-3.067.666.694.694 0 00-.419.634v2.262a4.375 4.375 0 002.745 4.225l.369.141a1.045 1.045 0 00.743.004z"
    />
  );

export default SvgPhoneActionShield;
