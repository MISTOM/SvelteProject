export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    const response = await fetch('api/postcodes')
    const postcodes = await response.json()
    const postcodeList = postcodes.map(postcode => { return `${postcode.buildingName} , ${postcode.line1}, ${postcode.town}` })

    return {
        postcodeList
    }
}