import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperReadMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-read-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-read-man_svg__a"
      d="M16 6.523c-3.556 0-3.556-1.333-4-1.777-.444.444-.444 1.777-4 1.777"
    />,
    <path
      className="newspaper-read-man_svg__a"
      d="M17.312 8.5l.466-3.306S18.222.75 12 .75 6.222 5.194 6.222 5.194L6.7 8.479"
    />,
    <path
      className="newspaper-read-man_svg__a"
      d="M9.333 8.75c0-.491.4-.444.889-.444s.889-.047.889.444M12.889 8.75c0-.491.4-.444.889-.444s.889-.047.889.444M2.5 16.25v3.729a1 1 0 00.746.967L12 23.25v-11L3.8 9.661a1 1 0 00-1.3.953v1.636M12 12.25l8.2-2.589a1 1 0 011.3.953v1.636M21.5 16.25v3.729a1 1 0 01-.746.967L12 23.25"
    />,
    <path
      className="newspaper-read-man_svg__a"
      d="M.5 14.25c0 1.5 1.4 2 2.5 2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5c-1.1 0-2.5.5-2.5 2zM23.5 14.25c0 1.5-1.395 2-2.5 2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5c1.105 0 2.5.5 2.5 2z"
    />
  );

export default SvgNewspaperReadMan;
