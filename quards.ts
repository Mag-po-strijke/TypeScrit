function strip(x: string | number) {
    if (typeof x === 'string') {/*if x classe instanceOf */
        x.trim()
    }else{
        return x.toFixed(2)
    }
}