import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-exchange_svg__a"
      d="M8.188 11.25H1.712M12 5.25V3.1a.85.85 0 00-.85-.85h-5.9V1.6A.85.85 0 004.4.75H1.6a.851.851 0 00-.85.85v8.689a.962.962 0 001.891.247l1.332-4.671a.851.851 0 01.817-.615h7.86a.851.851 0 01.822 1.069l-.944 3.256M21.75 17.25V15.1a.85.85 0 00-.85-.85h-5.15v-.65a.85.85 0 00-.85-.85h-2.8a.851.851 0 00-.85.85v8.689a.962.962 0 001.891.247l1.332-4.671a.851.851 0 01.817-.615h7.11a.851.851 0 01.822 1.069l-1.247 4.3a.85.85 0 01-.821.631h-8.942M18.75 1.5l-2.847 1.561L17.25 6M23.25 8.25a6.749 6.749 0 00-6.989-4.408M5.25 23.25l2.848-1.56-1.348-2.94M.75 16.5a6.753 6.753 0 006.99 4.408"
    />
  );

export default SvgFolderExchange;
