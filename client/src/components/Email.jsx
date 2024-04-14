// import React from "react";

function Email() {
  return (
    <>
      <div style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2>Reservation Confirmation</h2>
          </div>
          <div style="padding: 20px; line-height: 1.6;">
            <p>Dear [Guest Name],</p>
            <p>
              Thank you for choosing Foody Flames Restaurant. We are thrilled to
              confirm your reservation and are eagerly waiting to serve you with
              our finest dishes and exceptional service. Here are the details of
              your upcoming dining experience:
            </p>
            <ul>
              <li>Date: [Reservation Date]</li>
              <li>Time: [Reservation Time]</li>
              <li>Number of Guests: [Number of Guests]</li>
            </ul>
            <p>
              At Foody Flames Restaurant, we're committed to creating memorable
              moments. Whether you're celebrating a special occasion or simply
              treating yourself to a gourmet dining experience, our menu is
              carefully crafted to cater to a wide range of tastes and
              preferences.
            </p>
            <p>
              We also want to assure you that your health and safety are our top
              priority. We strictly adhere to all current health guidelines to
              ensure a safe and enjoyable dining experience for all our guests.
              We kindly ask you to arrive a few minutes early to facilitate a
              smooth seating process.
            </p>
            <p>
              Please be aware of our 24-hour cancellation policy. If your plans
              change, kindly let us know in advance so we can accommodate other
              guests who are waiting to experience what Foody Flames Restaurant
              has to offer.
            </p>
            <p>
              If you have any special requests or dietary restrictions, please
              don't hesitate to contact us. Your satisfaction is paramount, and
              we aim to tailor your dining experience to your specific needs.
            </p>
            <p>
              We look forward to welcoming you to Foody Flames Restaurant.
              Prepare to embark on a culinary journey that you won't soon
              forget!
            </p>
            <p>Warm regards,</p>
            <p>The Team at Foody Flames Restaurant</p>
            <a
              href="#"
              style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;"
            >
              View Your Reservation
            </a>
          </div>
          <div style="text-align: center; padding: 10px; font-size: 0.8em; color: grey;">
            Foody Flames Restaurant
            <br>[Restaurant Address] | [Restaurant Phone]</br>
            <a href="[Restaurant Website]" style="color: grey;">
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
