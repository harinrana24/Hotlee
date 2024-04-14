import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationsList = () => {
    const [reservationData, setReservationData] = useState({
        reservations: [],
        filteredReservations: [],
    });
    const [filter, setFilter] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('https://hotlee.onrender.com/reservations');
                setReservationData({
                    reservations: response.data,
                    filteredReservations: response.data,
                });
            } catch (error) {
                console.log('Failed to fetch reservations:', error);
                setError('Failed to fetch reservations');
            }
        };

        fetchReservations();
    }, []);

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value);
        const filtered = value ? reservationData.reservations.filter(reservation =>
            reservation.firstName.toLowerCase().includes(value.toLowerCase()) ||
            reservation.lastName.toLowerCase().includes(value.toLowerCase()) ||
            reservation.email.toLowerCase().includes(value.toLowerCase()) ||
            reservation.phone.includes(value)
        ) : reservationData.reservations;

        setReservationData(prev => ({
            ...prev,
            filteredReservations: filtered,
        }));
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='bgfor'>
            <h1>Reservation List</h1>
            <input
                type="text"
                className="reservation-input"
                placeholder="Filter by name, email, or phone"
                value={filter}
                onChange={handleFilterChange}
            />
            <div className="reservations-container">
                {reservationData.filteredReservations.length > 0 ? (
                    reservationData.filteredReservations.map((reservation, index) => (
                        <ReservationCard key={reservation._id} reservation={reservation} index={index} />
                    ))
                ) : (
                    <p>No reservations found.</p>
                )}
            </div>
        </div>
    );
};

const ReservationCard = ({ reservation, index }) => {
    return (
        <div className={`reservation-card ${index % 3 === 0 ? 'apple' : index % 3 === 1 ? 'banana' : 'cherry'}`}>
            <p>Name: {reservation.firstName} {reservation.lastName}</p>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
            <p>Email: {reservation.email}</p>
            <p>Guests: {reservation.guest}</p>
            <p>Phone: {reservation.phone}</p>
        </div>
    );
};

export default ReservationsList;
