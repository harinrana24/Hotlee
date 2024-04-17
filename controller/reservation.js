import ErrorHandler from "../eroor/error.js";
import { Reservation } from "../models/reservSchema.js";
import nodemailer from "nodemailer";
import twilio from "twilio";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, guest } = req.body;
  function convertTo12HourFormat(timeString) {
    // Early return for clearly invalid formats
    if (!timeString || timeString.indexOf(":") === -1) {
      console.error("Invalid time format:", timeString);
      return "Invalid time";
    }

    // Attempt to handle AM/PM suffix if present
    let suffix = "";
    let [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    // Validate hours and minutes
    if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
      console.error("Invalid time format:", timeString);
      return "Invalid time";
    }

    // Adjust hours for AM/PM if necessary and provided
    if (
      modifier &&
      (modifier.toUpperCase() === "AM" || modifier.toUpperCase() === "PM")
    ) {
      suffix = modifier.toUpperCase();
    } else {
      suffix = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert "0" hour to "12" for 12 AM
    }

    // Ensure hours and minutes are two digits
    let formattedHours = hours < 10 ? "0" + hours : hours.toString();
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();

    return `${formattedHours}:${formattedMinutes} ${suffix}`;
  }
  const convertedtime = convertTo12HourFormat(time);

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_ACCOUNT_AUTH
  );

  //  Ensure 'phone' is used here instead of 'number' which was undefined
  client.messages.create({
     from: process.env.TWILIO_ACCOUNT_NUMBER,
     to: phone,
     body: `Hello ${firstName} ${lastName}! Your table at Foody Flames Restaurant is confirmed for ${date} at ${convertedtime}, for ${guest} guests. Address: 425 bloor street W,Toronto. For changes, call us at +1(289)8891440. We look forward to welcoming you!`
   }).then(message => console.log(message.id)).catch(error => console.error(error));

  // fOR EMAIL
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  // EMAIL BODY
  let info = transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Reservation Confirmed",
    html: ` <div style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #FFFAE5;">
    <div style="max-width: 600px; margin: auto; background: #FFFFFF; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <div style="background-color: #F27230; color: white; padding: 10px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2 style="color: #FFD700;">Reservation Confirmation</h2>
      </div>
      <div style="padding: 20px; line-height: 1.6;">
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for choosing Foody Flames Restaurant. We are thrilled to confirm your reservation and are eagerly waiting to serve you with our finest dishes and exceptional service. Here are the details of your upcoming dining experience:</p>
        <ul>
          <li>Date: ${date}</li>
          <li>Time: ${convertedtime}</li>
          <li>Number of Guests: ${guest}</li>
        </ul>
        <p>At Foody Flames Restaurant, we're committed to creating memorable moments. Whether you're celebrating a special occasion or simply treating yourself to a gourmet dining experience, our menu is carefully crafted to cater to a wide range of tastes and preferences.</p>
        <p>We also want to assure you that your health and safety are our top priority. We strictly adhere to all current health guidelines to ensure a safe and enjoyable dining experience for all our guests. We kindly ask you to arrive a few minutes early to facilitate a smooth seating process.</p>
        <p>Please be aware of our 24-hour cancellation policy. If your plans change, kindly let us know in advance so we can accommodate other guests who are waiting to experience what Foody Flames Restaurant has to offer.</p>
        <p>If you have any special requests or dietary restrictions, please don't hesitate to contact us. Your satisfaction is paramount, and we aim to tailor your dining experience to your specific needs.</p>
        <p>We look forward to welcoming you to Foody Flames Restaurant. Prepare to embark on a culinary journey that you won't soon forget!</p>
        <p>Warm regards,</p>
        <p>The Team at Foody Flames Restaurant</p>
      </div>
      <div style="text-align: center; padding: 10px; font-size: 0.8em; background-color: #F27230; color: white;">
        Foody Flames Restaurant<br>
        425 bloor street W, Toronto | +1(289)8891440<br>
        
      </div>
    </div>
  </div>
  `,
  });

  if (!firstName || !lastName || !email || !date || !time || !phone || !guest) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }
  //FOR CREATING MONGODB  COLLECTION
  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
      guest,
    });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
