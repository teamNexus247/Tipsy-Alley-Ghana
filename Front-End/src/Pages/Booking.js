            import React, { useRef, useEffect } from 'react';
            import '../Styles/Booking.css';

            const Booking = () => {
                const formRef = useRef(null);

                const scrollToForm = () => {
                    if (formRef.current) {
                        formRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                };


                useEffect(() => {
                    const handleSubmit = (event) => {
                        event.preventDefault();

                        const formData = new FormData(event.target);
                        const data = {};
                        formData.forEach((value, key) => {
                            data[key] = value;
                        });

                        fetch('https://backend-fegmid3olq-ww.a.run.app/api/bookings', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })
                            .then(response => response.json())
                            .then(data => {
                                alert('Booking successful!');
                                event.target.reset();
                            })
                            .catch(error => {
                                console.error('Error booking event:', error);
                                alert('Booking failed. Please try again.');
                            });
                    };

                    const form = document.getElementById('bookingForm');
                    form.addEventListener('submit', handleSubmit);

                    return () => {
                        form.removeEventListener('submit', handleSubmit);
                    };
                }, []);

                return (
                    <div className='main-book'>
                        <div className="homepage">
                            <div className="content">
                                <h1 className="title">Book Us For<br /> Your Events.</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br />
                                    ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
                                </p>
                                <button className="cta-button" onClick={scrollToForm}>Know More</button>
                            </div>
                        </div>

                        <div className="booking-container" ref={formRef}>
                            <form className="booking-form" id="bookingForm">
                                <div>
                                    <label>Your Name</label>
                                    <input type="text" id="customerName" name="customerName" placeholder='Enter full name' />
                                </div>
                                <div>
                                    <label>Your Phone Number</label>
                                    <input type="text" id="contact" name="contact" placeholder='Input phone number' />
                                </div>
                                <div>
                                    <label>Email Address (Optional)</label>
                                    <input type="email" id="email" name="email" placeholder='Enter Email' />
                                </div>
                                
                                <div>
                                    <label>Event Location</label>
                                    <input type='text' id="eventLocation" name="eventLocation" placeholder='Enter specific Location' />
                                </div>
                                <div>
                                    <label>Event Date (dd/mm/yy)</label>
                                    <input type="date" id="eventDate" name="eventDate" />
                                </div>
                                <div>
                                    <label>Event Time</label>
                                    <input type="time" name="eventTime" />
                                </div>
                                <div>
                                    <label>Event Details</label>
                                    <textarea rows="4" id="eventDetails" name="eventDetails" placeholder='Add more information about the event'></textarea>
                                </div>
                                <button type="submit">Book Us</button>
                            </form>
                        </div>
                    </div>
                );
            }

            export default Booking;
