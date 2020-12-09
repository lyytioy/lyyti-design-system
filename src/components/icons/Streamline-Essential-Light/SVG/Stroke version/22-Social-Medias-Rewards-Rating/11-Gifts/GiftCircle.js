import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gift-circle_svg__a"
      d="M12 1v22M23 12H1M10.25 6.75C11.216 7.717 12 12 12 12s-4.284-.783-5.25-1.75a2.475 2.475 0 013.5-3.5zM13.75 6.75C12.784 7.717 12 12 12 12s4.284-.783 5.25-1.75a2.475 2.475 0 00-3.5-3.5z"
    />,
    <circle className="gift-circle_svg__a" cx={12} cy={12} r={11} />,
    <path className="gift-circle_svg__a" d="M12 12l-4 3.5M12 12l4 3.5" />
  );

export default SvgGiftCircle;
