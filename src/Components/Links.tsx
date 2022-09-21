import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        {links.map(({ url, text }, i) => (
          <ToggleButton value={text}>
            <Link className="links" key={i} to={url}>
              {text}
            </Link>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
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
