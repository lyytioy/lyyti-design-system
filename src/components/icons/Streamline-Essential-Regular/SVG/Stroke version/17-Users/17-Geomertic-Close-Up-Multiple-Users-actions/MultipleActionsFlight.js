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
      d="M10.784 10.513A6.05 6.05 0 006.752 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-flight_svg__cls-1"
      cx={6.752}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-flight_svg__cls-1"
      cx={16.502}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-flight_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71M21.872 13.623a1.756 1.756 0 011 .633 1.8 1.8 0 01-.447 2.6l-10.142 6.3a.624.624 0 01-.688-.02l-3.718-2.61a.343.343 0 01-.052-.483c.017-.022 1.619-1.434 1.619-1.434a.342.342 0 01.331-.057l1.956 1.165 2.48-1.73-4.7-2.91a.427.427 0 01-.048-.6c.02-.024 1.217-.916 1.217-.916a.425.425 0 01.4-.057l6.477 2.411 3-2.045a1.671 1.671 0 011.315-.247z"
    />
  );

export default SvgMultipleActionsFlight;
