import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-bug_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362z"
    />,
    <path
      className="shield-bug_svg__a"
      d="M17.3 12.985a2.231 2.231 0 00-.621-.439l1.682-1.682-1.679-1.682a2.25 2.25 0 01-3-3L12 4.5l-1.682 1.682a2.25 2.25 0 10-3 3l-1.682 1.682 1.682 1.682a2.25 2.25 0 013 3L12 17.228l1.682-1.682a2.25 2.25 0 103.618-2.561z"
    />
  );

export default SvgShieldBug;
