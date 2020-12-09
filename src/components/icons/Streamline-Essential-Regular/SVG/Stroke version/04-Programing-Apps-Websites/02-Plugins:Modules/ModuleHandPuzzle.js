import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleHandPuzzle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-hand-puzzle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="module-hand-puzzle_svg__a"
      d="M17.81 10.485a1.7 1.7 0 112.4-2.4 1.774 1.774 0 01.39.59.439.439 0 00.314.267.424.424 0 00.39-.113L22.629 7.5a.857.857 0 00-.013-1.212L21.227 4.9a1.653 1.653 0 00.764-.436 1.733 1.733 0 00-2.45-2.45 1.658 1.658 0 00-.436.764l-1.39-1.389a.857.857 0 00-1.215-.011l-1.23 1.23a.422.422 0 00-.12.345.44.44 0 00.193.317 1.7 1.7 0 11-2.131 2.621A1.738 1.738 0 0113 5.622a.446.446 0 00-.317-.194.421.421 0 00-.345.12L11.1 6.778a.858.858 0 00.012 1.213l4.9 4.9a.858.858 0 001.213.012l1.325-1.325a.421.421 0 00.112-.389.443.443 0 00-.266-.315 1.734 1.734 0 01-.586-.389zM13.327 16.367l7.545-.575a1.553 1.553 0 011.509 2.243 1.553 1.553 0 01-.844.76L11.1 22.708a2.991 2.991 0 01-2 .037l-7.992-2.664"
    />,
    <path
      className="module-hand-puzzle_svg__a"
      d="M6.358 17.081h5.788a1.334 1.334 0 001.266-.912 1.334 1.334 0 00-.912-1.709l-5.941-1.619a4.5 4.5 0 00-1.924-.1l-3.527.588"
    />
  );

export default SvgModuleHandPuzzle;
