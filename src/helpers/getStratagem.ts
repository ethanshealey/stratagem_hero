import stratagemJson from '@/data/stratagems.json'

export default (lookup: string) => {
    return stratagemJson.filter((s: any) => s.lookup === lookup)[0]
}