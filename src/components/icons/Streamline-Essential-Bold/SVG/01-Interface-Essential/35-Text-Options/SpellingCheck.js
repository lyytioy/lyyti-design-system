import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpellingCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.161 12.293a.252.252 0 01.235.164l1.166 3.18a1 1 0 101.877-.688L8.409 1.23a1.5 1.5 0 00-2.817 0L.562 14.949a1 1 0 101.877.688l1.166-3.18a.25.25 0 01.234-.164zm-3.4-8.456a.251.251 0 01.47 0l2.244 6.12a.25.25 0 01-.235.336H4.756a.25.25 0 01-.235-.336z" />,
    <path d="M23.081 8.48a1 1 0 00-1.394.232l-8.972 12.559a.5.5 0 01-.76.063l-3.748-3.748A1 1 0 106.793 19l4.165 4.165a2 2 0 001.411.586c.055 0 .111 0 .166-.007A1.988 1.988 0 0014 22.913l9.314-13.039a1 1 0 00-.233-1.394z" />
  );

export default SvgSpellingCheck;
