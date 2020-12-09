import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModulePhonePuzzle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-phone-puzzle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="module-phone-puzzle_svg__a"
      d="M15.686 10.1a1.7 1.7 0 112.4-2.4 1.749 1.749 0 01.39.59.443.443 0 00.315.267.422.422 0 00.389-.113l1.325-1.325a.859.859 0 00-.012-1.213L19.1 4.519a1.653 1.653 0 00.764-.436 1.733 1.733 0 00-2.45-2.45 1.661 1.661 0 00-.436.764l-1.386-1.389A.858.858 0 0014.379 1l-1.23 1.23a.421.421 0 00-.12.345.445.445 0 00.193.317 1.752 1.752 0 01.27.221 1.7 1.7 0 11-2.4 2.4 1.752 1.752 0 01-.221-.27.44.44 0 00-.317-.193.422.422 0 00-.345.12L8.979 6.4a.858.858 0 00.013 1.213l4.9 4.9a.858.858 0 001.213.013L16.43 11.2a.424.424 0 00.113-.39.443.443 0 00-.267-.314 1.764 1.764 0 01-.59-.396z"
    />,
    <path
      className="module-phone-puzzle_svg__a"
      d="M15.31 15.751v4.768a2.732 2.732 0 01-2.732 2.732H6.043a2.733 2.733 0 01-2.733-2.732V4.984a2.734 2.734 0 012.733-2.733H9.31M3.31 17.251h12"
    />,
    <path
      className="module-phone-puzzle_svg__a"
      d="M9.31 19.876a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgModulePhonePuzzle;
