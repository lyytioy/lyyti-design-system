import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-target_svg__a"
      d="M9.5 23.5a9 9 0 009-9M.5 11.5v3A9 9 0 006 22.794M12.479 1A9.006 9.006 0 00.514 9M15.5 13.982v.518a6.026 6.026 0 01-.189 1.5M7 4.044a6.076 6.076 0 014-.361"
    />,
    <path
      className="touch-id-target_svg__a"
      d="M13.972 18.5a6 6 0 01-10.472-4v-5a5.977 5.977 0 011.528-4"
    />,
    <path
      className="touch-id-target_svg__a"
      d="M9.5 6.5a3 3 0 00-3 3v3M6.5 14.5a3 3 0 006 0v-2.926M9.5 9.5v3M9.5 14.5v1"
    />,
    <circle className="touch-id-target_svg__a" cx={17.5} cy={6.5} r={5} />,
    <path
      className="touch-id-target_svg__a"
      d="M17.5.5v3M17.5 9.5v3M11.5 6.5h3M20.5 6.5h3M17.5 6.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgTouchIdTarget;
