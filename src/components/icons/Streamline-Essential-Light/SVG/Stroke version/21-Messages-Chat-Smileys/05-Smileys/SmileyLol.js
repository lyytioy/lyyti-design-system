import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLol = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-lol_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-lol_svg__a"
      d="M23.466 11.331a11.485 11.485 0 00-22.932 0M21.809 17.981a11.476 11.476 0 01-19.618 0M18.8 10.108a2.359 2.359 0 00-4 0M9.5 10.108a2.359 2.359 0 00-4 0M3.227 15.363a1.5 1.5 0 11-2.454-1.726c.477-.678 2.954-1.59 2.954-1.59s-.027 2.639-.5 3.316zM20.773 15.363a1.5 1.5 0 102.454-1.726c-.477-.678-2.954-1.59-2.954-1.59s.027 2.639.5 3.316z"
    />,
    <path
      className="smiley-lol_svg__a"
      d="M17.1 15.256a.5.5 0 01.758.528 6 6 0 01-11.724 0 .5.5 0 01.758-.528A9.292 9.292 0 0012 16.5a9.292 9.292 0 005.1-1.244z"
    />
  );

export default SvgSmileyLol;
