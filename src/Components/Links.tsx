import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

export const Links = () => {
  const [alignment, setAlignment] = useState("🔎 All");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {links.map(({ url, text }, i) => (
        <Link className="links" key={i} to={url}>
          <ToggleButton value={text}>{text}</ToggleButton>
        </Link>
      ))}
    </ToggleButtonGroup>
  );
};

{
  /* <ToggleButtonGroup
color="primary"
value={alignment}
exclusive
onChange={handleChange}
aria-label="Platform"
>
<ToggleButton value="web">Web</ToggleButton>
<ToggleButton value="android">Android</ToggleButton>
<ToggleButton value="ios">iOS</ToggleButton>
</ToggleButtonGroup> */
}
