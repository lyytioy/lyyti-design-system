import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-home_svg__a"
      d="M12.75 15.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="audio-file-home_svg__a"
      d="M11.25 17.26l4.518-3.953a2.249 2.249 0 012.964 0l4.518 3.953M18.75 23.25h-3v-3a1.5 1.5 0 013 0zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V9"
    />,
    <ellipse
      className="audio-file-home_svg__a"
      cx={6}
      cy={12.75}
      rx={2.25}
      ry={1.5}
    />,
    <path
      className="audio-file-home_svg__a"
      d="M8.25 12.75l-.295-5.929 1.062-.113A2.685 2.685 0 0111.6 7.99"
    />
  );

export default SvgAudioFileHome;
