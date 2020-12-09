import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModulePhonePuzzle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-phone-puzzle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="module-phone-puzzle_svg__a"
      d="M7.5 21.229a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <path
      className="module-phone-puzzle_svg__a"
      d="M11 23.479H3a2 2 0 01-2-2V2.5a2 2 0 012-2h9a2 2 0 012 2v5.979M8 19.479H1M14 4.479H1M6 2.479h3"
    />,
    <path
      className="module-phone-puzzle_svg__a"
      d="M17.05 20.379a2 2 0 113.277-2.145.5.5 0 00.819.171l1.561-1.562a1 1 0 000-1.414l-1.6-1.6a2 2 0 10-2.449-2.449l-1.6-1.6a1 1 0 00-1.414 0l-1.449 1.449a.5.5 0 00.077.772 1.953 1.953 0 01.311.254 2 2 0 01-2.828 2.828 1.953 1.953 0 01-.254-.311.5.5 0 00-.772-.077l-1.457 1.441a1 1 0 000 1.414l5.657 5.657a1 1 0 001.414 0l1.562-1.561a.5.5 0 00-.171-.82 1.985 1.985 0 01-.684-.447z"
    />
  );

export default SvgModulePhonePuzzle;
