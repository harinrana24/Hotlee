// Reservations.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationsList = () => {
    const [reservations, setReservations] = useState([]);
    const [filter, setFilter] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://hotlee.onrender.com/reservations')
            .then(response => {
                setReservations(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log('Failed to fetch reservations:', error);
                setError('Failed to fetch reservations');
                console.log(response.data)

            });
    }, []);

    return (
        <div className='bgfor'>
            <h1>Reservation List</h1>
            <input
                type="text"
                className="reservation-input"
                placeholder="Filter by name, email, or phone"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            <div className="reservations-container">
                {Array.isArray(reservations) && reservations.length > 0 ? (
                    reservations.map(reservation => (
                        <div key={reservation._id} className={`reservation-card ${reservation._id % 3 === 0 ? 'apple' : reservation._id % 3 === 1 ? 'banana' : 'cherry'}`}>
                            <p>Name: {reservation.firstName} {reservation.lastName}</p>
                            <p>Date: {reservation.date}</p>
                            <p>Time: {reservation.time}</p>
                            <p>Email: {reservation.email}</p>
                            <p>Guests: {reservation.guest}</p>
                            <p>Phone: {reservation.phone}</p>
                        </div>
                    ))
                ) : (
                    <div>No reservations found</div>
                )}
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default ReservationsList;
