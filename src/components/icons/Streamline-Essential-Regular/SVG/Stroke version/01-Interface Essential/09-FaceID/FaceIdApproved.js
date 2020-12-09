import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceIdApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="face-id-approved_svg__a"
      d="M19.5 9h1.917a1.833 1.833 0 011.833 1.833v10.584a1.833 1.833 0 01-1.833 1.833h-4.584A1.833 1.833 0 0115 21.417V18M10.993 17.261v-2.277l.764.128a2.276 2.276 0 002.65-2.246V11l.71-.177a1.139 1.139 0 00.671-1.736l-1.381-2.07v-.568c0-3.358-3.4-6.038-7.449-5.664a6.824 6.824 0 00-2.794 12.709v3.767"
    />,
    <path
      className="face-id-approved_svg__a"
      d="M21 15.375L18.375 18l-1.125-1.5"
    />
  );

export default SvgFaceIdApproved;
