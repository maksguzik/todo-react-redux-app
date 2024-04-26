const InputWidth = (text) =>{
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "20px Arial, Helvetica, sans-serif";
    const width = context.measureText(text).width;
    return width;
  }

export default InputWidth;