class Formatter {
  static capitalize (string){
    return string[0].toUpperCase() + string.substring(1);
  }
  static sanitize(string){
    return  string.replace(/[^a-zA-Z0-9 '-]/gmi, "")
  }
  static titleize (string){
    let stringHelper = string.split(" ");
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let finalString = stringHelper.map((word,index) => index !==0 && exceptions.includes(word) ? word : Formatter.capitalize(word))

    return finalString.join(" ")
  }
}

