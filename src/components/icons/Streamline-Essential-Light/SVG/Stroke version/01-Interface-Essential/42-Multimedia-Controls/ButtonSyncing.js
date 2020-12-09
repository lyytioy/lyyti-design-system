import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonSyncing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-syncing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-syncing_svg__a"
      d="M7 6h-.5a6 6 0 000 12H14l-6.1 4.7c-.218.168-.4.08-.4-.2V18M17 18h.5a6 6 0 000-12H10l6.1-4.657c.218-.167.4-.078.4.2V6"
    />
  );

export default SvgButtonSyncing;
