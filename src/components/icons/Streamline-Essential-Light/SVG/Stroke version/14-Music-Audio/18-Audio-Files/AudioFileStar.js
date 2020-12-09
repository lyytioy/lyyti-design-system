import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-star_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-star_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.119-1.686 2.5-1.686 2.5.754 2.5 1.686z"
    />,
    <path
      className="audio-file-star_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5M18.206 11.93l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgAudioFileStar;
