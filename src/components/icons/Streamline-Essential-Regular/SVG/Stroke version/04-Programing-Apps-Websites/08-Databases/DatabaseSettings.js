import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-settings_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.147-1.073 2.194-2.839 2.988M23.25 9.751v-4.5"
    />,
    <path
      className="database-settings_svg__a"
      d="M.75 5.251v6c0 2.063 3.472 3.8 8.206 4.333"
    />,
    <path
      className="database-settings_svg__a"
      d="M.75 11.251v6c0 2.066 3.481 3.806 8.225 4.335"
    />,
    <circle
      className="database-settings_svg__a"
      cx={17.25}
      cy={16.501}
      r={1.5}
    />,
    <path
      className="database-settings_svg__a"
      d="M18.524 10.7l.442 1.452a.993.993 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.219l-1.031 1.109a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.993.993 0 00-1.174.681l-.442 1.449a1.33 1.33 0 01-2.548 0l-.442-1.452a.993.993 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.219l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005z"
    />
  );

export default SvgDatabaseSettings;
