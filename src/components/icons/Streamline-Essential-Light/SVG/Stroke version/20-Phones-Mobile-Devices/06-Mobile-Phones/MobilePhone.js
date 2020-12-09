import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobilePhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mobile-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mobile-phone_svg__a"
      x={4.5}
      y={0.5}
      width={15}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="mobile-phone_svg__a"
      d="M19.5 19.5h-15M9.5 2.5h5M12 21a.25.25 0 11-.25.25A.25.25 0 0112 21"
    />
  );

export default SvgMobilePhone;
