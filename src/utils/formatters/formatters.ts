const zeroMaker = (time: number) => time >= 10 ? time : `0${time}`;

export const getFormattedTime = (duration?: number, currentTime?: number) => {
  if (duration && currentTime) {
    const hours = Math.floor((duration - currentTime) / 3600);
    const minutes = Math.floor((duration - currentTime - (hours * 3600)) / 60);
    const secs = Math.floor((duration - currentTime - (hours * 3600) - (minutes * 60)));

    if (duration >= 3600) {
      return `- ${zeroMaker(hours)}:${zeroMaker(minutes)}:${zeroMaker(secs)}`;
    } else {
      return `- ${zeroMaker(minutes)}:${zeroMaker(secs)}`;
    }
  }
};

export const markChanger = (mark: number) => {
  if (mark < 3) {
    return 'Bad';
  }
  if (mark > 3 && mark < 5) {
    return 'Normal';
  }
  if (mark > 5 && mark < 8) {
    return 'Good';
  }
  if (mark > 8 && mark < 10) {
    return 'Very good';
  }
  if (mark === 10) {
    return 'Awesome';
  }
};

export const dateChanger =
(date: string) =>
  `${new Date(date).toLocaleString('en-US',
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    },
  )}`;
