import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { getPhotos } from '../../services/photosService';
import { Photo } from '../../models/Photo';
import '../../style/photoStyle.css';

interface PhotosProps {
  albumId: number | null;
}

const Photos: React.FC<PhotosProps> = ({ albumId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    if (albumId !== null) {
      const fetchPhotos = async () => {
        const photosFromService = await getPhotos(albumId);
        setPhotos(photosFromService);
      };

      fetchPhotos();
    }
  }, [albumId]);

  return (
    <Modal.Body className="photos-modal-body">
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} className="photo-image" />
      ))}
    </Modal.Body>
  );
};

export default Photos;
