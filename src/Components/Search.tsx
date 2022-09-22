import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../Context/ContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search something..."
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </Box>
      <br />
      <Links />
    </div>
  );
};
