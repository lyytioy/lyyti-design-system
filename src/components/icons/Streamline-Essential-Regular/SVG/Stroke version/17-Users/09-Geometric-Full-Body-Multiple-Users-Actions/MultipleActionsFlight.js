import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flight_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-flight_svg__cls-1"
      d="M21.87 13.623a1.76 1.76 0 011.044.686 1.813 1.813 0 01.3 1.433c-.061.276-.414 1.116-.783 1.116l-10.142 6.3a.624.624 0 01-.688-.02l-3.718-2.61a.343.343 0 01-.053-.483c.018-.022 1.62-1.434 1.62-1.434a.342.342 0 01.331-.057l1.956 1.165 2.48-1.73-4.7-2.91a.427.427 0 01-.048-.6c.02-.024 1.217-.916 1.217-.916a.425.425 0 01.4-.057l6.476 2.411 3-2.045a1.668 1.668 0 011.308-.249z"
    />,
    <circle
      className="multiple-actions-flight_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-flight_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h3"
    />,
    <circle
      className="multiple-actions-flight_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-flight_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsFlight;
