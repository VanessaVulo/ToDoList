export const getCurrentDay = () => {
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
      'Thursday', 'Friday', 'Saturday'
    ];
    const today = new Date().getDay();
    return days[today];
  };