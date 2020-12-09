import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-star_svg__a"
      d="M17.968 11.68l1.542 4.07h2.978a.735.735 0 01.518 1.283l-2.582 1.816 1.443 3.313a.786.786 0 01-1.119.982l-3.487-1.961-3.486 1.961a.786.786 0 01-1.12-.982l1.445-3.313-2.6-1.816a.734.734 0 01.516-1.283h3l1.544-4.07a.8.8 0 011.408 0z"
    />,
    <path
      className="audio-file-star_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <ellipse
      className="audio-file-star_svg__a"
      cx={6}
      cy={12.75}
      rx={2.25}
      ry={1.5}
    />,
    <path
      className="audio-file-star_svg__a"
      d="M8.25 12.75l-.295-5.929 1.062-.113A2.685 2.685 0 0111.6 7.99"
    />
  );

export default SvgAudioFileStar;
