import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeBackFront = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-back-front_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="envelope-back-front_svg__a"
      d="M2.5 12.5h-1a1 1 0 01-1-1v-10a1 1 0 011-1h15a1 1 0 011 1v8"
    />,
    <path
      className="envelope-back-front_svg__a"
      d="M4.5 11.5h19v11a1 1 0 01-1 1h-17a1 1 0 01-1-1v-11zM.5 2.5l7.993 4.7a1 1 0 001.014 0L17.5 2.5"
    />,
    <path
      className="envelope-back-front_svg__a"
      d="M4.5 11.5l2.214 3.992a1 1 0 00.875.515L20.412 16a1 1 0 00.874-.514L23.5 11.5"
    />
  );

export default SvgEnvelopeBackFront;
