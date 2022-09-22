import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Typography,
} from "@mui/material";
import { useResultContext } from "../Context/ContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/video") {
        getResults(`/search/q=${searchTerm}`);
      } else if (location.pathname === "/") {
        getResults(`/search/q=${searchTerm}&num=40`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  return (
    <>
      <CssBaseline />
      {location.pathname === "/" && (
        <section className="result">
          {results?.results?.map(({ link, title, description }, index) => (
            <article key={index} className="eachSearch">
              <a
                className="search"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  color="primary"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  {link.length > 30 ? link.substring(0, 30) : link}{" "}
                </Typography>
                <Typography
                  color="blue"
                  variant="button"
                  display="block"
                  gutterBottom
                >
                  {title}
                </Typography>
                <p className="description">{description}</p>
              </a>
            </article>
          ))}
        </section>
      )}
      {location.pathname === "/news" && (
        <section className="newsParent">
          {results?.entries?.map(({ id, links, source, title }) => (
            <Card
              sx={{
                minWidth: 275,
                maxWidt: 400,
                mt: 1,
              }}
              key={id}
              className="news"
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {source.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
                <CardActions>
                  <Button size="small">
                    <a
                      className="newsLearnMore"
                      href={links?.[0].href}
                      target="_blank"
                      rel="noreferrer "
                    >
                      Learn More
                    </a>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
      {location.pathname === "/image" && (
        <section className="images">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="image"
              >
                <img
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                  className="eachImage"
                />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </section>
      )}
      {location.pathname === "/video" && (
        <div className="flex flex-wrap ">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
