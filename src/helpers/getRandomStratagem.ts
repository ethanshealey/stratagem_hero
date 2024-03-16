import stratagemJson from '@/data/stratagems.json'

export default () => {
    const list = stratagemJson
    return list[Math.floor((Math.random()*list.length))]
}