export const TruncateWords = (text:string, limit:number, elipsis:string) => {
return text.split(" ").splice(0, limit).join(" ") + `${elipsis}`
}

export const TwitterVol = (vol: number) => {
    if (vol !== null) {
      if (vol > 999 && vol < 999999) {
        return (vol / 1000).toFixed(1) + "k tweets";
      } else if (vol > 999999) {
        return (vol / 1000000).toFixed(1) + "m tweets";
      } else {
        return vol;
      }
    } else {
      return "";
    }
  };