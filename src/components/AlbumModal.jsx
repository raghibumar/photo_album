import React from "react";

const AlbumModal = ({ albumData, open, onClose }) => {
  if (!open) return null; // Don't render if modal isn't open

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
        <h2>Album Photos</h2>
        <div style={styles.photosList}>
          {/* Render the photos of the selected album */}
          {albumData.map((photo) => (
            <div key={photo.id} style={styles.photoItem}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Modal styling
const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid red",
  },
  modalContent: {
    border: "2px solid red",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "600px",
    maxHeight: "80vh", // Set a max height for the modal
    overflowY: "auto", // Allow vertical scrolling inside the modal
    position: "relative", // Ensure the close button is positioned inside the modal
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  photosList: {
    border: "1px solid green",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    maxHeight: "60vh", // Limit the height of the photos list to enable scrolling
    overflowY: "auto", // Enable scrolling for the photos list
  },
  photoItem: {
    textAlign: "center",
    border: "1px solid blue",
    padding: "10px",
    img: {
      width: "100%",
      height: "auto",
    },
  },
};

export default AlbumModal;
