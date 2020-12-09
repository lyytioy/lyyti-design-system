import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTambourine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-tambourine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-tambourine_svg__a"
      d="M12.794 21.851a1.651 1.651 0 00.986.936 1.557 1.557 0 001.32-.137 9.166 9.166 0 001.713-1.357 9.794 9.794 0 00-.284-13.844 9.794 9.794 0 00-13.842-.185 9.217 9.217 0 00-1.342 1.718 1.56 1.56 0 00-.128 1.329 1.652 1.652 0 00.945.981"
    />,
    <path
      className="instrument-tambourine_svg__a"
      d="M2.482 12.854a1.419 1.419 0 01-.294-1.621 1.365 1.365 0 011.865-.6 23.354 23.354 0 019.38 9.31 1.366 1.366 0 01-.582 1.87 1.437 1.437 0 01-1.892-.646 20.352 20.352 0 00-8.111-8.053 1.467 1.467 0 01-.366-.26z"
    />,
    <ellipse
      className="instrument-tambourine_svg__a"
      cx={16.691}
      cy={7.309}
      rx={3.505}
      ry={3.626}
      transform="rotate(-45.205 16.691 7.31)"
    />,
    <ellipse
      className="instrument-tambourine_svg__a"
      cx={19.309}
      cy={17.106}
      rx={3.505}
      ry={3.626}
      transform="rotate(-45.205 19.31 17.105)"
    />,
    <ellipse
      className="instrument-tambourine_svg__a"
      cx={7.315}
      cy={4.691}
      rx={3.505}
      ry={3.626}
      transform="rotate(-45.205 7.316 4.69)"
    />
  );

export default SvgInstrumentTambourine;
