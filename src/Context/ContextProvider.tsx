import axios from "axios";
import { createContext, useContext, useState } from "react";

type ResultContextProviderProps = {
  getResults: any;
  results: any;
  searchTerm: string;
  setSearchTerm: any;
  loading: boolean;
};
const ResultContext = createContext<any>(null);
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }: any) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url: string) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    });
    const data = await res.json();
    console.log(data);

    setResults(data);
    setLoading(false);
  };
  return (
    <ResultContext.Provider
      //@ts-ignore
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
