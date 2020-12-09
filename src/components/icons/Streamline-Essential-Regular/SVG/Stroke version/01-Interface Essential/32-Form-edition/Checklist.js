import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChecklist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".checklist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="checklist_svg__a"
      x={0.75}
      y={0.749}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="checklist_svg__a"
      d="M12 4.499l-4.5 6-3-3M14.25 8.249h4.5M12 13.499l-4.5 6-3-3M14.25 17.249h4.5"
    />
  );

export default SvgChecklist;
