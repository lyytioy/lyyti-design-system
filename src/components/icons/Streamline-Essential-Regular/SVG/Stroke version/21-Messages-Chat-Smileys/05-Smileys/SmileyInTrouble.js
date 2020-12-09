import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyInTrouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-in-trouble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-in-trouble_svg__a"
      d="M23.241 11.553q.009.222.009.447a11.24 11.24 0 11-6.72-10.3M18.048 18a6.752 6.752 0 00-12.1 0"
    />,
    <path
      className="smiley-in-trouble_svg__a"
      d="M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M15.75 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M23.25 5.75A2.384 2.384 0 0121 8.25a2.384 2.384 0 01-2.25-2.5c0-1.381 2.25-5 2.25-5s2.25 3.619 2.25 5z"
    />
  );

export default SvgSmileyInTrouble;
