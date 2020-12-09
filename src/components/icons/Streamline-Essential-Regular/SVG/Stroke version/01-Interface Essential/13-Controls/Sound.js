import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="sound_svg__a" d="M12.001 3.75v3M12.001 9.75v3" />,
    <circle className="sound_svg__a" cx={12.001} cy={8.25} r={1.5} />,
    <path
      className="sound_svg__a"
      d="M6.751 12.75V2.25a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v10.5M15.244 15.1a.933.933 0 00-.96.085L11 17.25H9.167a.908.908 0 00-.916.9v1.2a.908.908 0 00.916.9H11l3.283 2.07a.929.929 0 00.96.085.9.9 0 00.507-.8V15.9a.9.9 0 00-.506-.8z"
    />
  );

export default SvgSound;
