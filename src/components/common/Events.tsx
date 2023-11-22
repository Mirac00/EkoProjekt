import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import ToDos from './ToDos';
import 'bootstrap/dist/css/bootstrap.min.css';


const Events: React.FC = () => {
  let [events, setEvents] = useState<Post[]>([]);

  useEffect(() => {
    let fetchEvents = async () => {
      let events = await getPosts();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container">
      {events.map(event => (
        <div key={event.id} className="card mb-3 custom-shadow p-3 mb-5 bg-white rounded">
          <div className="card-body bg-">
            <UsersActivist userId={event.userId} />
            <h2 className="card-title">{event.title}</h2>
            <p className="card-text">{event.body}</p>
            <ToDos userId={event.userId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
