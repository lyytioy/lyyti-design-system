import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="composition-human_svg__a"
      d="M.5 23.5a10.135 10.135 0 011-4.057c.705-1.41 3.65-2.387 7.347-3.756 1-.371.836-2.981.393-3.468C8.2 11.076 7.32 9.735 7.32 6.5c0-3.265 2.13-5 4.68-5s4.68 1.735 4.68 5c0 3.235-.881 4.576-1.92 5.719-.443.487-.607 3.1.393 3.468 3.7 1.369 6.642 2.346 7.347 3.756a10.135 10.135 0 011 4.057zM23.5 3.5v-2a1 1 0 00-1-1h-2"
    />,
    <path
      className="composition-human_svg__a"
      d="M23.5 11.5v2a1 1 0 01-1 1h-2M.5 3.5v-2a1 1 0 011-1h2M.5 11.5v2a1 1 0 001 1h2"
    />
  );

export default SvgCompositionHuman;
