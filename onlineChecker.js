// Online / Offline detection

// Request a small at an interval to determine status

const checkOnlineStatus = async () => {
  try {
    const online = await fetch("/online-detector.svg"); // the image should be very small for loading problem
    return online.status >= 200 && online.status < 300; // either
  } catch (err) {
    return false; // definitely offline
  }
};

setInterval(async () => {
  const result = await checkOnlineStatus();
  console.log(result ? "Online" : "Offline");
}, 3000);
