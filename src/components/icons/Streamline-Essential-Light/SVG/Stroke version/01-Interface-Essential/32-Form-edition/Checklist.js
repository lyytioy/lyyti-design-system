import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChecklist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".checklist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="checklist_svg__a"
      x={0.5}
      y={0.499}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="checklist_svg__a"
      d="M5 7.499l1.5 1.5 4-4M5 17.499l1.5 1.5 4-4M13.5 8.499h6M13.5 17.499h6"
    />
  );

export default SvgChecklist;
