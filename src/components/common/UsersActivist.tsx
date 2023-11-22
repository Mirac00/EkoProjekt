import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/IUserActivistService';
import { userActivist } from '../../models/UserActivist';
import 'bootstrap/dist/css/bootstrap.min.css';

interface UsersActivistProps {
  userId: number;
}

const UsersActivist: React.FC<UsersActivistProps> = ({ userId }) => {
  let [user, setUser] = useState<userActivist | null>(null);

  useEffect(() => {
    let fetchUser = async () => {
      let user = await getUser(userId);
      setUser(user);
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="card mb-3">
      {user && (
        <div className="card-body">
          <h5 className="card-title">Imię: {user.name}</h5>
          <p className="card-text">E-mail: {user.email}</p>
          <p className="card-text">Nazwa urzytkownika: {user.username}</p>
          <p className="card-text">Telefon: {user.phone}</p>
          <p className="card-text">Strona WWW: {user.website}</p>
          <p className="card-text">Adres: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p className="card-text">Firma: {user.company.name}</p>
          <p className="card-text">Catch Phrase: {user.company.catchPhrase}</p>
          <p className="card-text">BS: {user.company.bs}</p>
        </div>
      )}
    </div>
  );
};

export default UsersActivist;
