import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChecklistPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".checklist-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="checklist-pen_svg__a"
      d="M8.25 4.949l-2.7 3.6-1.8-1.8M8.25 13.649l-2.7 3.6-1.8-1.8M9.75 8.249h3M9.75 17.249h3"
    />,
    <path
      className="checklist-pen_svg__a"
      d="M12.75.749H2.25a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h12M15.75 18.749a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5V7.5h-4.5zM20.25 2.249h1.5a1.5 1.5 0 011.5 1.5V10.5M20.25 7.5V2.249a1.5 1.5 0 00-1.5-1.5h-1.5a1.5 1.5 0 00-1.5 1.5V7.5M18 20.249v3"
    />
  );

export default SvgChecklistPen;
