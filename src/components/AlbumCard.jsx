import React, { useEffect, useState } from "react";
import AlbumModal from "./AlbumModal";
const photoDetails = {
  albumId: [],
};

const AlbumCard = () => {
  //States
  const [photosData, setPhotosData] = useState();
  const [specificAlbum, setSpecificAlbum] = useState([]);
  const [openAlbumModal, setOpenAlbumModal] = useState(false);

  // Side Effects
  useEffect(() => {
    getPhotosDetails();
  }, []);

  //Function to get photos details
  const getPhotosDetails = () => {
    let albumData = null;
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const photosData = {};

        // Grouping photos by albumId
        data.forEach((photo) => {
          if (!photosData[photo.albumId]) {
            photosData[photo.albumId] = [];
          }
          photosData[photo.albumId].push(photo);
        });

        // Updating the state with grouped data
        setPhotosData(photosData);
      });
  };

  // Function to handle specific album
  const handleSpecificAlbum = (albumId) => {
    console.log("albumId:", albumId);

    const specificAlbum = photosData[albumId];
    setSpecificAlbum(specificAlbum);
    setOpenAlbumModal(true);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "100vw",
          gap: "10px",
        }}
      >
        {photosData &&
          Object.keys(photosData).map((albumId) => (
            <div
              key={albumId}
              style={{
                border: "1px solid red",
                backgroundColor: "lightblue",
                cursor: "pointer",
              }}
              onClick={handleSpecificAlbum.bind(null, albumId)}
            >
              <h2> Album: {albumId}</h2>
            </div>
          ))}
      </div>
      {openAlbumModal && (
        <AlbumModal
          albumData={specificAlbum}
          open={openAlbumModal}
          onClose={() => setOpenAlbumModal(false)}
        />
      )}
    </>
  );
};

export default AlbumCard;
