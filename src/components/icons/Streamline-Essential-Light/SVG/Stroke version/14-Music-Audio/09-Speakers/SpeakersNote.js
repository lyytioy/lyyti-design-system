import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakersNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="speakers-note_svg__a" cx={16.75} cy={9.363} r={1.25} />,
    <circle className="speakers-note_svg__a" cx={21.75} cy={7.863} r={1.25} />,
    <path
      className="speakers-note_svg__a"
      d="M18 9.113v-4.28a1 1 0 01.684-.948l3-.834A1 1 0 0123 4v3.613M17 13.5v9a1 1 0 01-1 1H2a1 1 0 01-1-1v-21a1 1 0 011-1h14a1 1 0 011 1V2"
    />,
    <circle className="speakers-note_svg__a" cx={9} cy={16} r={5} />,
    <circle className="speakers-note_svg__a" cx={9} cy={6} r={2.5} />,
    <circle className="speakers-note_svg__a" cx={9} cy={16} r={1.5} />,
    <path
      className="speakers-note_svg__a"
      d="M9 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSpeakersNote;
