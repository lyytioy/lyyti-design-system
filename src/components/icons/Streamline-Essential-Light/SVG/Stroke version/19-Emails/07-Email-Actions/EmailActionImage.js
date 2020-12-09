import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-image_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-image_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <path
      className="email-action-image_svg__a"
      d="M7 12.5l1.95-3.15a1 1 0 011.274-.207L12 10.5l1.662-2.14a1 1 0 011.588.067L17 12.5z"
    />,
    <circle className="email-action-image_svg__a" cx={8.999} cy={5} r={1.5} />
  );

export default SvgEmailActionImage;
