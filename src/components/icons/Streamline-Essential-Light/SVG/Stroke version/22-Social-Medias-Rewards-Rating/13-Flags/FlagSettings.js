import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-settings_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.32-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1v16zM12 11.25"
    />,
    <path
      className="flag-settings_svg__a"
      d="M12 11.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="flag-settings_svg__a"
      d="M12.849 7.631l.295.969a.663.663 0 00.782.454l.982-.228a.892.892 0 01.849 1.479l-.687.741a.669.669 0 000 .908l.687.741a.893.893 0 01-.849 1.479l-.982-.228a.661.661 0 00-.782.454l-.295.969a.887.887 0 01-1.7 0l-.295-.969a.663.663 0 00-.782-.454l-.982.228a.892.892 0 01-.848-1.474l.687-.741a.669.669 0 000-.908l-.687-.741a.893.893 0 01.849-1.479l.982.228a.661.661 0 00.782-.454l.295-.969a.887.887 0 011.699-.005z"
    />
  );

export default SvgFlagSettings;
