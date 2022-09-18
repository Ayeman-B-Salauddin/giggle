import { Routes as Wrapper, Route } from "react-router-dom";
import { Results } from "./Components/Results";

export const Routes = () => {
  return (
    <section>
      <Wrapper>
        <Route path="/" element={<Results />} />
        <Route path="images" element={<Results />} />
        <Route path="news" element={<Results />} />
        <Route path="videos" element={<Results />} />
      </Wrapper>
    </section>
  );
};
