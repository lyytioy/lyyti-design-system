import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gift-circle_svg__a"
      d="M12 .75v22.5M12 11.25L15.75 15M8.25 15L12 11.25M12 11.25l3.257-3.257a1.908 1.908 0 111.349 3.257zM12 11.25L8.743 7.993a1.908 1.908 0 10-1.349 3.257z"
    />,
    <circle className="gift-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path className="gift-circle_svg__a" d="M23.25 12h-3M.75 12h3" />
  );

export default SvgGiftCircle;
