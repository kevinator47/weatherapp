export function GetDayOfWeek(dt : number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dt * 1000);
    return days[date.getDay()];
  };
  
  export function GetFullDate(dt : number) {
    const date = new Date(dt * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 porque getMonth() devuelve un índice basado en cero
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  export function getTime(dt: number) {
    const date = new Date(dt * 1000);
    return date.getUTCHours();
  };

  export function getTimeWithMinutes(dt:number) {
    const date = new Date(dt * 1000);
    return date.getUTCHours() + " : " + date.getUTCMinutes();
  }
  