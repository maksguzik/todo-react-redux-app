const InputWidth = (text) =>{
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = "20px Arial, Helvetica, sans-serif";
    let width = context.measureText(text).width;
    return width;
  }

export default InputWidth;