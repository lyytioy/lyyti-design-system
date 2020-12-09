import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-approved_svg__a"
      d="M.5 17.507v-15M2.5 6.507v7M4.5 5.507v9M6.5 4.507v11M8.5 3.507v13M20.5 10.007v-7.5M18.5 6.507v3M16.5 5.507v4M14.5 4.507v5.5M12.5 3.507v7.5M10.5.507v13"
    />,
    <circle className="voice-id-approved_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="voice-id-approved_svg__a"
      d="M20.174 15.756l-2.905 3.873a.751.751 0 01-1.13.081l-1.5-1.5"
    />
  );

export default SvgVoiceIdApproved;
