import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="zip-file-settings_svg__a"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="zip-file-settings_svg__a"
      d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548.006zM10.226 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L6.75.75h3zM8.25 9.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 13.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 16.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="zip-file-settings_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />
  );

export default SvgZipFileSettings;
