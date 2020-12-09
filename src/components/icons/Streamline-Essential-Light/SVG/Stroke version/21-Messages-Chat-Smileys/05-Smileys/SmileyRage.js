import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyRage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-rage_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-rage_svg__a"
      d="M15.336 17.005a4.45 4.45 0 00-6.672 0M14.5 9.392a2.359 2.359 0 004 0M9.5 9.392a2.359 2.359 0 01-4 0"
    />,
    <path
      className="smiley-rage_svg__a"
      d="M1.9 17.5A11.5 11.5 0 1123.5 12a11.439 11.439 0 01-1.4 5.5M17.5 22.1a11.515 11.515 0 01-11 0M9.5 6.5l-3-1M14.5 6.5l3-1"
    />,
    <path
      className="smiley-rage_svg__a"
      d="M2.842 17.759a1.5 1.5 0 10-1.351 2.646c-.016.015-.037.019-.052.034a1.5 1.5 0 002.122 2.122c.015-.015.019-.036.034-.052a1.5 1.5 0 102.646-1.351l3.423-5.868a.7.7 0 00-.954-.954zM21.158 17.759a1.5 1.5 0 111.351 2.646c.016.015.037.019.052.034a1.5 1.5 0 01-2.122 2.122c-.015-.015-.019-.036-.034-.052a1.5 1.5 0 11-2.646-1.351l-3.423-5.868a.7.7 0 01.954-.954z"
    />
  );

export default SvgSmileyRage;
