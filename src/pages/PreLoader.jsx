import { useState, useEffect } from "react";
import useFilmStore from "../stores/filmStore";
import BeatLoader from "react-spinners/BeatLoader";

function PreLoader() {
  const { isLoading } = useFilmStore();
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="h-[90vh] bg-flatBlack flex justify-center items-center">
      <BeatLoader
        color={"#FCA311"}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default PreLoader;
