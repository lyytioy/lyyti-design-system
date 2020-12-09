import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicBookNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-book-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-book-note_svg__a"
      d="M14.25 11.684L1.241 11.7a.489.489 0 01-.491-.487V2.444a.488.488 0 01.487-.491h.489M18 1.951v6.733"
    />,
    <path
      className="music-book-note_svg__a"
      d="M9.743 3.739c-.006-1.64 1.592-2.583 4.792-2.673a.437.437 0 01.317.125.444.444 0 01.133.317l.023 7.058a.442.442 0 01-.426.445c-3.215.089-4.838 1.029-4.832 2.673-.006-1.644-1.6-2.575-4.813-2.638a.44.44 0 01-.429-.446l-.023-7.054a.447.447 0 01.131-.318.431.431 0 01.316-.128c3.201.068 4.805 1 4.811 2.639zM9.75 3.434v8.25M9.75 11.701v7.483M9.75 19.184l3.75 3.75M9.75 19.184L6 22.934"
    />,
    <ellipse
      className="music-book-note_svg__a"
      cx={15.722}
      cy={18.456}
      rx={1.506}
      ry={1.478}
    />,
    <ellipse
      className="music-book-note_svg__a"
      cx={21.744}
      cy={16.683}
      rx={1.506}
      ry={1.478}
    />,
    <path
      className="music-book-note_svg__a"
      d="M17.228 18.16V13.1a1.184 1.184 0 01.823-1.121L21.665 11a1.221 1.221 0 011.085.162 1.175 1.175 0 01.5.959v4.271"
    />
  );

export default SvgMusicBookNote;
