import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneKaraoke = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-karaoke_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="microphone-karaoke_svg__a" cx={12} cy={5.5} r={5} />,
    <path
      className="microphone-karaoke_svg__a"
      d="M6 5.5h12M14.5 9.83l-.871 10.188a1.623 1.623 0 01-1.616 1.482 1.649 1.649 0 01-1.644-1.507L9.5 9.83M12 21.5v2M12 13.5v2"
    />
  );

export default SvgMicrophoneKaraoke;
