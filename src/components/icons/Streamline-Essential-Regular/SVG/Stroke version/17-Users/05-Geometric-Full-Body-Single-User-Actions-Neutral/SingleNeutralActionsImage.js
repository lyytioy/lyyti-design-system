import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-actions-image_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-actions-image_svg__cls-1"
      d="M15.375 14.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M23.25 21l-2.392-3.587a.749.749 0 00-1.238-.013l-2 2.851-1.237-.989a.749.749 0 00-1.092.169L12.75 23.25"
    />,
    <circle
      className="single-neutral-actions-image_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-image_svg__cls-1"
      d="M9.75 9.826a5.25 5.25 0 00-9 3.674v2.25H3l.75 7.5h4.5l.323-3.233"
    />
  );

export default SvgSingleNeutralActionsImage;
