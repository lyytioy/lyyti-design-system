import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="love-it-circle_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="love-it-circle_svg__a"
      d="M12 18l-5.113-5.335a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.834.836.835-.835a3.025 3.025 0 014.845.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgLoveItCircle;
