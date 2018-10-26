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
    //=================== The following code is an implementation of Bresenham's line algorithm
    static plotLine(startVector, endVector) {
        let result = [];
        
        let startX = startVector.x;
        let startY = startVector.y;
        let endX = endVector.x;
        let endY = endVector.y;

        let tmp;
        let steep = Math.abs(endY - startY) > Math.abs(endX - startX);

        if (steep) {
            tmp = startX;
            startX = startY;
            startY = tmp;

            tmp = endX;
            endX = endY;
            endY = tmp;
        }
        let sign = 1;
        if (startX > endX) {
            sign = -1;
            startX *= -1;
            endX *= -1;
        }

        let dx = endX - startX;
        let dy = Math.abs(endY - startY);
        let err = (dx/2);
        let yStep = startY < endY ? 1 : -1;
        let y = startY;

        for (let x = startX; x <= endX; x++) {
            if (steep) {
                result.push({x: y, y: sign*x});
            }
            else {
                result.push({x: sign*x, y: y});
            }

            err = err - dy;
            if (err < 0) {
                y += yStep;
                err += dx;
            }
        }

        return result;
    }
}
export default HelpFunctions