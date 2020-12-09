import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-expand_svg__a"
      x={7.5}
      y={4.5}
      width={9}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-expand_svg__a"
      d="M16.5 15.5h-9M12 17.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M.5 5V.5H5M.5.5l5 5M23.5 5V.5H19M23.5.5l-5 5M.5 19v4.5H5M.5 23.5l5-5M23.5 19v4.5H19M23.5 23.5l-5-5"
    />
  );

export default SvgPhoneExpand;
