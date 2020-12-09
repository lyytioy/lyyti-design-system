import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login-key_svg__a"
      d="M12.818 14.517l2.545-2.545 1.752.47a1.572 1.572 0 001.924-1.924l-.47-1.752.784-.784 1.752.47a1.571 1.571 0 001.924-1.924l-.469-1.752a2.356 2.356 0 00-3.333-3.332l-9.741 9.741a6.283 6.283 0 103.332 3.332z"
    />,
    <circle className="login-key_svg__a" cx={5.922} cy={18.081} r={1.571} />
  );

export default SvgLoginKey;
