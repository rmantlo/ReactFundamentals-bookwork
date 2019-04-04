const leftPad = (width, n) => {
        if( (n + '').length > width){
            return n;
        }
        const padding = new Array(width).join('0');
        console.log((padding+n).slice(-width));
        return(padding + n).slice(-width);
    };
    leftPad(2, 74);