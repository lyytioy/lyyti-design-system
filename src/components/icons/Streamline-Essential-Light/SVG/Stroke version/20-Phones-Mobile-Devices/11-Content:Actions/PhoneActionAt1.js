import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionAt1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-at-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-at-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M9 21.25"
    />,
    <path
      className="phone-action-at-1_svg__a"
      d="M15.5 15.5v6a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2H10"
    />,
    <circle className="phone-action-at-1_svg__a" cx={15.5} cy={6.5} r={2.25} />,
    <path
      className="phone-action-at-1_svg__a"
      d="M17.75 6.5v1.125A1.874 1.874 0 0019.625 9.5 1.874 1.874 0 0021.5 7.625v-.847A6.185 6.185 0 0015.655.5a6 6 0 00-1.577 11.835 6.14 6.14 0 002.966-.038"
    />
  );

export default SvgPhoneActionAt1;
