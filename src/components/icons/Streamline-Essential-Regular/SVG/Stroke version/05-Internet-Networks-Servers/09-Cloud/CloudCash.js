import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-cash_svg__a"
      d="M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.588l2.063.825a1.342 1.342 0 01-.5 2.587h-2.03M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle className="cloud-cash_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="cloud-cash_svg__a"
      d="M23.1 9.659a4.868 4.868 0 00-7.486-2.794A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudCash;
