export const calculateTimeElapsed = (updatedAt: string) => {
  if (!updatedAt) return "Last updated: never";
  const lastUpdatedTime = new Date(parseInt(updatedAt) * 1000); // Convert to milliseconds
  const currentTime = new Date();
  const timeDiff = Math.abs(currentTime.getTime() - lastUpdatedTime.getTime());

  const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Calculate hours
  const mins = Math.floor((timeDiff / (1000 * 60)) % 60); // Calculate minutes

  if (hours > 24) {
    const days = Math.floor(hours / 24);
    return `Last updated ${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `Last updated ${hours} ${hours === 1 ? "hour" : "hours"}${
      mins > 0 ? ` and ${mins} ${mins === 1 ? "minute" : "minutes"}` : ""
    } ago`;
  } else {
    return `Last updated ${mins} ${mins === 1 ? "minute" : "minutes"} ago`;
  }
};
