import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakersNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="speakers-note_svg__a"
      cx={13.875}
      cy={10.294}
      r={1.875}
    />,
    <circle
      className="speakers-note_svg__a"
      cx={21.375}
      cy={8.044}
      r={1.875}
    />,
    <path
      className="speakers-note_svg__a"
      d="M15.75 10.294V3.5a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0123.25 2.25v5.794"
    />,
    <path
      className="speakers-note_svg__a"
      d="M17.25 14.25v7.5a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.5M14.232 15.436A5.25 5.25 0 119 9.75"
    />,
    <circle className="speakers-note_svg__a" cx={9} cy={15} r={1.5} />,
    <circle className="speakers-note_svg__a" cx={9} cy={5.25} r={1.5} />
  );

export default SvgSpeakersNote;
