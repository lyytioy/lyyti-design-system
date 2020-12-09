import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-settings_svg__a"
      d="M6.879 19.188L1.5 13.81a1.5 1.5 0 010-2.122L12 1.188a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379"
    />,
    <path
      className="tags-settings_svg__a"
      d="M16.564 4.5a.375.375 0 00-.375-.375.375.375 0 10.375.375"
    />,
    <circle className="tags-settings_svg__a" cx={16.939} cy={16.499} r={1.5} />,
    <path
      className="tags-settings_svg__a"
      d="M18.214 10.7l.442 1.453a.994.994 0 001.173.681l1.473-.342a1.339 1.339 0 011.274 2.219l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.339 1.339 0 01-1.276 2.214l-1.473-.341a.992.992 0 00-1.173.681l-.44 1.451a1.331 1.331 0 01-2.549 0l-.442-1.452a.993.993 0 00-1.174-.681l-1.472.341a1.338 1.338 0 01-1.277-2.217l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.339 1.339 0 011.274-2.219l1.472.342a1 1 0 001.174-.681l.442-1.453a1.331 1.331 0 012.552.004z"
    />
  );

export default SvgTagsSettings;
