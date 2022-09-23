import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../Context/ContextProvider";
import { Links } from "./Links";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;

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
      <Dictaphone />
    </div>
  );
};
