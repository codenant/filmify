import useFilmStore from "../stores/filmStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function FilmDetails() {
  const { imdbID } = useParams();
  const { filmDetails, fetchDetails } = useFilmStore();

  useEffect(() => {
    fetchDetails(imdbID);
  }, [imdbID]);

  // function to extract rotten tomatoes rating from an array of objects
  const getRottenTomatoes = (ratings) => {
    const rottenTomatoes = ratings.find(
      (rating) => rating.Source === "Rotten Tomatoes"
    );
    if (rottenTomatoes) {
      return rottenTomatoes.Value;
    } else {
      return "N/A";
    }
  };

  return (
    <div>
      {filmDetails && (
        <div className="p-14">
          <div className="flex flex-row gap-12">
            <h1 className="font-lato text-flatWhite text-4xl font-semibold">
              {filmDetails.Title}
            </h1>
            <h1 className="font-lato text-mySlate opacity-35 text-4xl font-semibold">
              {filmDetails.Year}
            </h1>
          </div>

          <div className="flex flex-row gap-10 mt-12">
            <div>
              <img
                src={filmDetails.Poster}
                alt={filmDetails.Title}
                className="w-auto h-auto object-contain"
              />
              <div className="flex flex-col gap-2 mt-8">
                <div className="ratingContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-[40px] h-[40px] fill-current text-mango"
                  >
                    <path d="M89.5 323.6H53.9V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32C434.1 33.3 447.1 47.3 447.1 63.9V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.9C29.6 480 29.3 479.1 29 479.9C13.3 478.5 1.1 466.1 0 449.7L0 61.8C1.1 45.9 13.8 33.1 30.3 31.1H417.7C417.9 31.1 418.2 32 418.4 32L418.4 32zM30.3 41.3C19 42 10 51 9.3 62.4V449.7C9.6 455.1 11.9 460.2 15.7 464C19.5 467.9 24.5 470.3 29.9 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.9C438.7 58.2 436.6 52.7 432.7 48.5C428.8 44.2 423.4 41.7 417.7 41.3L30.3 41.3z" />
                  </svg>
                  <p className="rating">{filmDetails.imdbRating}</p>
                </div>
                <div className="ratingContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1176.463"
                    className="w-[40px] h-[40px] fill-current text-[#ff3008]"
                  >
                    <path d="M329.572 412.228l.96 13.516c.56 7.438.96 29.15.96 48.226v34.67l23.273-1c12.134-.408 23.624-1.527 34.888-3.326l-1.577.208c27.752-5.84 41.908-19.115 43.468-40.708.263-1.722.413-3.708.413-5.73 0-11.44-4.807-21.757-12.51-29.042l-.02-.018c-12.716-12.356-30.43-16.636-69.3-16.716zm-120.605-91.493h99.092c13.583-1.432 29.347-2.248 45.3-2.248 34.243 0 67.607 3.762 99.702 10.894l-3.043-.567c41.017 11.09 74.09 38.813 92.117 75.298l.375.84c2 4.24 3.68 8.24 5.198 12.197l304.832.32 1.08 116.447-109.768-.96v301.873l-119.246-.64V533.394l-85.056.64c-9.973 18.838-24.317 34.182-41.736 45.06l-.492.287c-11.476 7.04-11.997 7.6-10.157 10.558 5.08 8 84.976 145.638 84.976 146.318l-135.56.76-80.497-135.002c-1.36-1.88-4.878-2.718-13.756-3.358l-11.877-.8 1.48 139.16L208.97 735.5zM266.71 32.138l-61.222 50.466 83.256 71.98c-14.778-4.866-31.786-7.67-49.45-7.67-67.765 0-125.886 41.29-150.574 100.087l-.4 1.076c31.734-9.126 68.185-14.374 105.862-14.374 9.803 0 19.523.355 29.148 1.054l-1.29-.075C108.564 308.774 34.615 435.164 34.615 578.826c0 118.06 49.942 224.458 129.852 299.217l.23.214c89.764 70.643 204.44 113.3 329.08 113.3 152.212 0 289.564-63.616 386.918-165.712l.202-.213c241.33-259.124 70.698-767.498-414.483-682.882 4.28-46.784 25.313-60.103 49.706-64.064-35.59-59.7-146.76-29.35-182.19 54.95-1.08 2.556-67.22-101.494-67.22-101.494z" />
                  </svg>
                  <p className="rating">
                    {getRottenTomatoes(filmDetails.Ratings)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h2 className="detailHeading">Synopsis:</h2>
                <p className="detailPara">{filmDetails.Plot}</p>
              </div>
              <div>
                <h2 className="detailHeading">Cast:</h2>
                <p className="detailPara">{filmDetails.Actors}</p>
              </div>
              <div>
                <h2 className="detailHeading">Genre:</h2>
                <p className="detailPara">{filmDetails.Genre}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmDetails;
