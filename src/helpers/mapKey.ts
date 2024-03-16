export default (key: string) => {
    if(key.toLocaleLowerCase() === "w" || key === "ArrowUp") return 'UP'
    else if(key.toLocaleLowerCase() === "a" || key === "ArrowLeft") return 'LEFT'
    else if(key.toLocaleLowerCase() === "s" || key === "ArrowDown") return 'DOWN'
    else if(key.toLocaleLowerCase() === "d" || key === "ArrowRight") return 'RIGHT'
    else return ''
}