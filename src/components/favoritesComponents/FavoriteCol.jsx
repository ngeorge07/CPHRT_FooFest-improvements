import React from "react";
import H2 from "../typography/H2";
import { AllBandsContext } from "../../App";
import FavoriteBandCard from "./FavoriteBandCard";

export default function FavoriteCol({ day }) {
  const allBands = React.useContext(AllBandsContext);

  return (
    <article
      className={`row-start-1 row-end-2 col-start-1 col-end-5 flex flex-col items-center`}
    >
      <H2>{day}</H2>

      <div>
        {allBands
          .filter((band) => band.day === day)
          .map((band, index) => (
            <FavoriteBandCard key={index} bandObj={band} />
          ))}
      </div>
    </article>
  );
}
