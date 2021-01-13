import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStampsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.5 3.256V3.2a2.7 2.7 0 00-4.923-1.529A2.682 2.682 0 0014.2 1.7a2.682 2.682 0 00-4.4 0 2.682 2.682 0 00-4.377-.033A2.684 2.684 0 003.2.5 2.715 2.715 0 00.5 3.256a2.667 2.667 0 001.117 2.172A2.682 2.682 0 001.639 9.8a2.694 2.694 0 000 4.4 2.683 2.683 0 00-.021 4.373 2.712 2.712 0 103.766 3.8h.032a2.677 2.677 0 004.367 0h.033a2.678 2.678 0 004.368 0h.033a2.677 2.677 0 004.367 0h.032a2.693 2.693 0 004.884-1.629 2.665 2.665 0 00-1.117-2.172 2.682 2.682 0 00-.022-4.372 2.694 2.694 0 000-4.4 2.682 2.682 0 00.022-4.372A2.667 2.667 0 0023.5 3.256zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1z" />,
    <path d="M9.635 13.764l-1.183 1.98a.5.5 0 00.429.756h7.943a.5.5 0 00.478-.646l-1.619-5.288a.5.5 0 00-.9-.114L12.3 14.5a.5.5 0 01-.75.122l-1.167-.988a.5.5 0 00-.748.13z" />,
    <circle cx={9} cy={9} r={2} />
  );

export default SvgStampsImage;