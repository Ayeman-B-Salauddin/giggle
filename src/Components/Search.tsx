import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import ClearIcon from "@mui/icons-material/Clear";
import { useResultContext } from "../Context/ContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      {/* <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search something!"
        onChange={(e) => setText(e.target.value)}
      /> */}
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

      {text !== "" && (
        // <button
        //   type="button"
        //   className="absolute top-1.5 right-4 text-2xl text-gray-500 "
        //   onClick={() => setText("")}
        // >
        //   x
        // </button>
        <Button
          sx={{ backgroundColor: "#FFF" }}
          size="large"
          variant="text"
          onClick={() => setText("")}
        >
          <ClearIcon color="error" fontSize="large" />
        </Button>
      )}
      <br />
      <Links />
    </div>
  );
};