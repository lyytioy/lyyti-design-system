import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-settings_svg__a"
      d="M9.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-10.5h1.5v-3H.75v-6a1.5 1.5 0 011.5-1.5h10.56a1.5 1.5 0 011.139.524l4.44 4.305a1.5 1.5 0 01.361.976v.2M6.75 3.75v3M11.25 3.75v3"
    />,
    <circle className="sd-card-settings_svg__a" cx={17.25} cy={16.5} r={1.5} />,
    <path
      className="sd-card-settings_svg__a"
      d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548.006z"
    />
  );

export default SvgSdCardSettings;
