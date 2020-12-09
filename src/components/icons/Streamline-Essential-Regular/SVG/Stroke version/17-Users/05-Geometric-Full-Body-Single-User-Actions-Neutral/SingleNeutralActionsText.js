import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-actions-text_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-actions-text_svg__cls-1"
      d="M14.25 14.25h6M14.25 17.25h6M14.25 20.25h2.25"
    />,
    <circle
      className="single-neutral-actions-text_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-text_svg__cls-1"
      d="M9.492 9.58A5.25 5.25 0 00.75 13.5v2.25H3l.75 7.5h4.5l.258-2.585"
    />
  );

export default SvgSingleNeutralActionsText;
