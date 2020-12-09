import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cloud-text_svg__a"
      x={9.749}
      y={9.751}
      width={13.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-text_svg__a"
      d="M12.749 12.751h7.5M12.749 15.751h7.5M12.749 18.751h3.75M17.184 6.8a3.731 3.731 0 00-6.125-2.125A5.242 5.242 0 106 11.251h.75"
    />
  );

export default SvgCloudText;
