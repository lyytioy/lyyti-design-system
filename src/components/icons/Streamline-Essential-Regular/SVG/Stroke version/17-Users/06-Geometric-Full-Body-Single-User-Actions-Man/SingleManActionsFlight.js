import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsFlight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-flight_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-flight_svg__cls-1"
      d="M21.872 13.624a1.765 1.765 0 011.069.721 1.8 1.8 0 01-.512 2.513l-10.143 6.3a.624.624 0 01-.688-.02L7.88 20.526a.343.343 0 01-.052-.483c.017-.022 1.619-1.434 1.619-1.434a.343.343 0 01.332-.057l1.955 1.165 2.48-1.73-4.7-2.91a.427.427 0 01-.048-.6c.021-.024 1.217-.916 1.217-.916a.425.425 0 01.4-.057l6.477 2.411 3-2.045a1.667 1.667 0 011.312-.246z"
    />,
    <circle
      className="single-man-actions-flight_svg__cls-1"
      cx={6.002}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-flight_svg__cls-1"
      d="M10.557 10.888A5.251 5.251 0 00.752 13.5v2.25H3l.75 7.5h3M6.002 8.25v6"
    />
  );

export default SvgSingleManActionsFlight;
