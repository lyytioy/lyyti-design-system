import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="laptop-settings_svg__a" cx={17.25} cy={16.75} r={1.5} />,
    <path
      className="laptop-settings_svg__a"
      d="M18.524 10.947l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.453a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548 0zM3 12.25V2.5A1.5 1.5 0 014.5 1h15A1.5 1.5 0 0121 2.5v6M8.25 12.25H.75A3.75 3.75 0 004.5 16h3.75"
    />
  );

export default SvgLaptopSettings;
