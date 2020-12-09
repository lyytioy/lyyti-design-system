import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceIdApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="face-id-approved_svg__a"
      d="M10.5 16.906V14.5h.558A1.739 1.739 0 0013 12.683V10.5h2.15a.35.35 0 00.333-.458c-1.32-4.085-2.275-8.628-6.631-9.425A7.032 7.032 0 00.529 6.709 7.469 7.469 0 003.5 13.156v3.75"
    />,
    <rect
      className="face-id-approved_svg__a"
      x={16.5}
      y={12.5}
      width={7}
      height={11}
      rx={1}
      ry={1}
    />,
    <path className="face-id-approved_svg__a" d="M18.5 17.5l1 1 2-2" />
  );

export default SvgFaceIdApproved;
