import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyPetrified = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-petrified_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-petrified_svg__a"
      d="M12 12.5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-6a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="smiley-petrified_svg__a"
      d="M20.628 16.615C22.2 15.531 23.5 14.767 23.5 11 23.5 4.649 18.351.5 12 .5S.5 4.649.5 11c0 3.767 1.3 4.531 2.872 5.615M7.381 21.246A5.055 5.055 0 0012 23.5a5.055 5.055 0 004.619-2.254"
    />,
    <path
      className="smiley-petrified_svg__a"
      d="M.5 23.5s3-1 3-5S2 14 3 13s4.5 2 4.5 5.5a17.751 17.751 0 01-.5 5M23.5 23.5s-3-1-3-5S22 14 21 13s-4.5 2-4.5 5.5a17.751 17.751 0 00.5 5"
    />,
    <ellipse
      className="smiley-petrified_svg__a"
      cx={6.5}
      cy={9}
      rx={2}
      ry={2.5}
    />,
    <ellipse
      className="smiley-petrified_svg__a"
      cx={17.5}
      cy={9}
      rx={2}
      ry={2.5}
    />
  );

export default SvgSmileyPetrified;
