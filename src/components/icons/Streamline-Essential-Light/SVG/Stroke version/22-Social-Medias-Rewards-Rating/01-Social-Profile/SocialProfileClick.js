import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileClick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-click_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-click_svg__a"
      d="M22.5 23.5v-2.667a3.334 3.334 0 00-3.333-3.333H17.5V13a1.5 1.5 0 00-3 0v7l-1.289-1.08a1.25 1.25 0 10-1.922 1.6l2.479 2.98"
    />,
    <path
      className="social-profile-click_svg__a"
      d="M9.5 23.5h-7a2 2 0 01-2-2v-19a2 2 0 012-2h19a2 2 0 012 2v13M.5 5.499h23"
    />,
    <rect
      className="social-profile-click_svg__a"
      x={3.5}
      y={8.499}
      width={7}
      height={8}
      rx={0.5}
      ry={0.5}
    />,
    <circle
      className="social-profile-click_svg__a"
      cx={7}
      cy={11.999}
      r={1.5}
    />,
    <path
      className="social-profile-click_svg__a"
      d="M9.5 16.5h-5a2.784 2.784 0 012.5-3 2.784 2.784 0 012.5 3zM4 18.499h4M4 20.499h4M4 2.749A.25.25 0 113.75 3 .25.25 0 014 2.749M7 2.749A.25.25 0 116.75 3 .25.25 0 017 2.749M10 2.749A.25.25 0 119.75 3a.25.25 0 01.25-.25M14 8.499h6.5"
    />
  );

export default SvgSocialProfileClick;
