import { json } from '@sveltejs/kit'

export async function GET () {
    const response = await fetch('http://localhost:4000/postcodes')
    const postcodes = await response.json()

    const appPostcode = postcodes.map(postcode => {
        return {
            buildingName: postcode.building_name,
            line1: postcode.line_1,
            line2: postcode.line_2,
            line3: postcode.line_3,
            town: postcode.post_town,
            postCode: postcode.postcode

        }
    })

    return json(appPostcode)
}