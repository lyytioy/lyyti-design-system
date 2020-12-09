import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingLightIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-light-idea_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-light-idea_svg__a"
      d="M13.5 6.759l-5.36 5.36a.375.375 0 00.265.64h2.1v4.5l5.36-5.36a.375.375 0 00-.265-.64h-2.1z"
    />,
    <path
      className="charging-light-idea_svg__a"
      d="M12 .759v1.625a1.5 1.5 0 001.277 1.473A8.247 8.247 0 119 4.321M1.125 11.634a.375.375 0 10.375.375.375.375 0 00-.375-.375M4.31 19.323a.375.375 0 10.375.375.375.375 0 00-.375-.375M4.31 3.944a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.69 3.944a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 22.509a.375.375 0 10.375.375.375.375 0 00-.375-.375M22.875 11.634a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.69 19.323a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgChargingLightIdea;
