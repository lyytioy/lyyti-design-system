import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-circle_svg__a"
      d="M12 17.25l-4.474-4.668a2.648 2.648 0 01-.5-3.056 2.648 2.648 0 014.24-.688l.734.731.731-.731a2.648 2.648 0 014.24.688 2.65 2.65 0 01-.5 3.056z"
    />,
    <circle className="love-it-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgLoveItCircle;
