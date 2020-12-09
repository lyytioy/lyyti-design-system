import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 17.615a.427.427 0 01-.271-.086.422.422 0 01-.085-.067.31.31 0 01-.036-.037L7.61 12.427a.503.503 0 01.078-.703.504.504 0 01.703.079L11.5 15.69V.5a.5.5 0 011 0v15.19l3.109-3.887a.499.499 0 01.703-.079c.216.172.25.488.079.703l-4 5a.216.216 0 01-.186.143.49.49 0 01-.205.045z" />,
    <path d="M5 24c-.827 0-1.5-.673-1.5-1.5v-14C3.5 7.673 4.173 7 5 7h4.5a.5.5 0 010 1H5a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-14A.5.5 0 0019 8h-4.5a.5.5 0 010-1H19c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5H5z" />
  );

export default SvgDownloadButton;
