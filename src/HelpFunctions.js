class HelpFunctions {
    //==================from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb======================
    static componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    static rgbToHex(r, g, b) {
        return "#" + HelpFunctions.componentToHex(r) + HelpFunctions.componentToHex(g) + HelpFunctions.componentToHex(b);
    }
    //===================from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb=====================

    static isEven(i){
        return (i % 2 == 0);
    }
    static makeEven(i){
        return this.isEven(i)? i : i-1;
    }
}
export default HelpFunctions