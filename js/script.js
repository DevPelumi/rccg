const targetDate = new Date("2024-10-10T23:59:59").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function () {
  // Get current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the target date
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"

  document.getElementById("time-day").innerHTML = days;
  document.getElementById("time-hr").innerHTML = hours;
  document.getElementById("time-min").innerHTML = minutes;
  document.getElementById("time-sec").innerHTML = seconds;

  // If the countdown is over, display some message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    // Get selected dates
    const selectedDates = Array.from(document.querySelectorAll('.w-checkbox-input'))
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.nextElementSibling.innerText)

    // Get formData
    const formData = {
      first_name: e.target['first_name'] ? e.target['first_name'].value ?? null : null,
      last_name: e.target['last_name'] ? e.target['last_name'].value ?? null : null,
      tel: e.target['tel'] ? e.target['tel'].value ?? null : null,
      address: e.target['address'] ? e.target['address'].value ?? null : null,
      dates: selectedDates ? selectedDates : null,
    };

    await sendEmail(formData);
    console.log(formData);

    // Reset form 
    e.target.reset();
  } catch (error) {
    console.error(error);
    // Reset form 
    e.target.reset();
  }
};

const sendEmail = async (formData) => {
  // email parameters
  const templateParams = {
    first_name: formData.first_name,
    last_name: formData.last_name,
    tel: formData.tel,
    address: formData.address,
    dates: formData.dates,
  };

  try {
    // Sending the email via EmailJS
    await emailjs.send('service_cfecbbp', 'template_qpkpr8u', templateParams);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
