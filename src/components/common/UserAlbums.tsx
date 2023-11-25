import React, { useEffect, useState } from 'react';
import { getAlbums } from '../../services/userAlbumsService';
import { UserAlbum } from '../../models/UserAlbum';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photos from './Photos';
import '../../style/userAlbumsStyle.css';

const UserAlbums: React.FC<{ userId: number }> = ({ userId }) => {
  let [albums, setAlbums] = useState<UserAlbum[]>([]);
  let [show, setShow] = useState(false);
  let [selectedAlbum, setSelectedAlbum] = useState<UserAlbum | null>(null);

  useEffect(() => {
    let fetchAlbums = async () => {
      let albums = await getAlbums(userId);
      setAlbums(albums);
    };

    fetchAlbums();
  }, [userId]);

  const handleClose = () => setShow(false);
  const handleShow = (album: UserAlbum) => {
    setSelectedAlbum(album);
    setShow(true);
  };

  return (
    <div className="container">
        <h3 className='d-flex justify-content-center'>Albumy wydarzenia</h3>
      <div className="d-flex flex-wrap justify-content-end">
        {albums.map(album => (
          <Button key={album.id} className="btn btn-primary m-2" onClick={() => handleShow(album)}>
            {album.title}
          </Button>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedAlbum?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <Photos albumId={selectedAlbum?.id || null} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserAlbums;
