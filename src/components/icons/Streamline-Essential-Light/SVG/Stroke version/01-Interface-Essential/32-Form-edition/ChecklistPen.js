import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChecklistPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".checklist-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="checklist-pen_svg__a"
      d="M7 4.999l-3 3-1.5-1.5M7 10.499l-3 3-1.5-1.5"
    />,
    <path
      className="checklist-pen_svg__a"
      d="M9.5 21.5h-8a1 1 0 01-1-1v-17a1 1 0 011-1h12a1 1 0 011 1v13z"
    />,
    <path
      className="checklist-pen_svg__a"
      d="M9.5 21.499v-5h5M17.498 8.499h4.001v10.5h-4.001zM21.5 1.5a2 2 0 012 2v8M19.5 20.999v2.5M17.499.499h4v8h-4z"
    />,
    <path
      className="checklist-pen_svg__a"
      d="M18.5 18.999h2v2h-2zM8.5 7.499H12M8.5 12.499H12"
    />
  );

export default SvgChecklistPen;
