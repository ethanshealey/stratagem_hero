import stratagemJson from '@/data/stratagems.json'

export default (category: string) => {
    const list = stratagemJson.filter(s => s.category === category)
    return list[Math.floor((Math.random()*list.length))]
}