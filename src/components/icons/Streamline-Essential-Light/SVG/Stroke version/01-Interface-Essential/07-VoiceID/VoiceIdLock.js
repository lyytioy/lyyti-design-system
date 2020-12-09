import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-lock_svg__a"
      d="M.5 17.501v-15M2.5 6.501v7M4.5 5.501v9M6.5 4.501v11M8.5 3.501v13M20.5 9.497V2.501M18.5 6.501v2.982M16.5 5.501v4.492M14.5 4.501v8.994M12.5 3.501v13M10.5.501v19"
    />,
    <rect
      className="voice-id-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="voice-id-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="voice-id-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgVoiceIdLock;
