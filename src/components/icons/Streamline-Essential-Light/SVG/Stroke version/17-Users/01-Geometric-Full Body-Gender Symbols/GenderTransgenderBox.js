import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderTransgenderBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-transgender-box_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="gender-transgender-box_svg__cls-1"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <circle
      className="gender-transgender-box_svg__cls-1"
      cx={11.5}
      cy={10.5}
      r={4.632}
    />,
    <path
      className="gender-transgender-box_svg__cls-1"
      d="M11.5 15.132v5.894M8.974 18.5h5.052M16.552 2.5H19.5v2.947M3.5 5.447V2.5h2.947M19.5 2.5l-4.632 4.632M3.5 2.5l4.632 4.632M7.921 4.395L5.605 6.711"
    />
  );

export default SvgGenderTransgenderBox;
