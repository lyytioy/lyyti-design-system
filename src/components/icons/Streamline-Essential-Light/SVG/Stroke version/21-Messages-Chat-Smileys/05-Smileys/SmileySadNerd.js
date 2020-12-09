import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySadNerd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sad-nerd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-sad-nerd_svg__a" cx={7.5} cy={9.5} r={3} />,
    <circle className="smiley-sad-nerd_svg__a" cx={16.5} cy={9.5} r={3} />,
    <path
      className="smiley-sad-nerd_svg__a"
      d="M10.5 9.5h3M7.5 19a4.5 4.5 0 019 0"
    />,
    <circle className="smiley-sad-nerd_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-sad-nerd_svg__a"
      d="M8 8.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 8.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M.5 5l4.248 3.304M23.5 5l-4.248 3.304"
    />
  );

export default SvgSmileySadNerd;
