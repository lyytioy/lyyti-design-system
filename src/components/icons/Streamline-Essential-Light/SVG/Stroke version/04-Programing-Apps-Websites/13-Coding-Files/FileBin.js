import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-bin_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-bin_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M12.5 12.504v6M11.5 18.504h2M11.5 12.504h2M9.5 14A1.5 1.5 0 018 15.5H6.5v-3H8A1.5 1.5 0 019.5 14zM9.5 17A1.5 1.5 0 018 18.5H6.5v-3H8A1.5 1.5 0 019.5 17zM15.5 18.504v-6l3 6v-6"
    />
  );

export default SvgFileBin;
