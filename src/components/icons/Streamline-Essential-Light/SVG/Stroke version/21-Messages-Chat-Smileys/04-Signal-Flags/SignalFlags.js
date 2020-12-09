import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlags = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-flags_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="signal-flags_svg__a"
      d="M19.818 12.308h3.5v5a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2M4.5 7.309l2.7-1.543a.5.5 0 00.186-.682L5.155 1.177A1 1 0 003.791.805l-2.6 1.488a1 1 0 00-.377 1.364l1.532 2.681"
    />,
    <circle className="signal-flags_svg__a" cx={11.818} cy={7.327} r={2} />,
    <path
      className="signal-flags_svg__a"
      d="M18.818 11.327h-5.639c-3.017 0-6.169-1.087-7.866-3.58a1 1 0 10-1.619 1.172 11.3 11.3 0 004.95 3.649 1.019 1.019 0 01.674.946v2.933a1.993 1.993 0 01-.127.7L7.41 21.908a1 1 0 101.816.838l2.092-4.532 2.092 4.532a1 1 0 101.816-.838l-1.781-4.761a1.993 1.993 0 01-.127-.7v-2.12a1 1 0 011-1h4.5a1 1 0 000-2z"
    />
  );

export default SvgSignalFlags;
