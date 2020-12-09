import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingFirst = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-first_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ranking-first_svg__a"
      d="M7.5 6h9v15h-9zM16.5 11V8h5a.889.889 0 01.724.447l1.053 2.105a2.522 2.522 0 01.224.947v9a.5.5 0 01-.5.5H16.5V11M7.5 11V8h-5a.889.889 0 00-.724.447L.723 10.552A2.522 2.522 0 00.5 11.5v9a.5.5 0 00.5.5h6.5V11M7.5 6l1.276-2.553A.889.889 0 019.5 3h5a.889.889 0 01.724.447L16.5 6zM16.5 11h7"
    />,
    <path
      className="ranking-first_svg__a"
      d="M19.032 14.741A1 1 0 1120 16a1 1 0 11-.964 1.269M3 15a1 1 0 011-1 1 1 0 011 1 1.423 1.423 0 01-.312.89L3 18h2M11.5 11h.5a.5.5 0 01.5.5V15M11.498 15h2M.5 11.5h7"
    />
  );

export default SvgRankingFirst;
