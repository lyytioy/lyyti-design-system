import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicBookNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-book-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-book-note_svg__a"
      d="M15 13.25H1a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h.5M17.5 3.25h1v6"
    />,
    <path
      className="music-book-note_svg__a"
      d="M9.5 5.25c0-1.849 1.829-2.9 5.488-2.994a.5.5 0 01.512.5v7a.5.5 0 01-.488.5C11.337 10.34 9.5 11.4 9.5 13.25c0-1.853-1.837-2.91-5.512-2.994a.5.5 0 01-.488-.5v-7a.5.5 0 01.512-.5C7.671 2.345 9.5 3.4 9.5 5.25zM9.5 5.25v8M9.5 13.25v10M9.5 19.75l3.5 3.5M9.5 19.75L6 23.25"
    />,
    <circle className="music-book-note_svg__a" cx={16.25} cy={17} r={1.25} />,
    <circle className="music-book-note_svg__a" cx={21.25} cy={15.5} r={1.25} />,
    <path
      className="music-book-note_svg__a"
      d="M17.5 17v-4.417a1 1 0 01.684-.948l3-.834a1 1 0 011.316.949v3.75"
    />,
    <circle className="music-book-note_svg__a" cx={22.25} cy={5} r={1.25} />,
    <path className="music-book-note_svg__a" d="M23.5 5V.75" />
  );

export default SvgMusicBookNote;
