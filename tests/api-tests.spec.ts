import {test, expect} from "../utils/fixtures/custom-fixtures";

export type Person = {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
}

export type Planet = {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: string[]
    films: string[]
    created: string
    edited: string
    url: string
}


test.describe('Simple example API tests on PW', () => {
    test.use({baseURL: 'https://swapi.dev/api/'})

    test('Luke Skywalker Test', async ({request}) => {
        const response = await request.get('people/1/')
        const person = (await response.json()) as unknown as Person

        expect(person.name).toEqual("Luke Skywalker")
        expect(person.height).toEqual("172")
    })

    test('Tatooine test', async ({request}) => {
        const response = await request.get('planets/1/')
        const person = (await response.json()) as unknown as Planet

        expect(person.name).toEqual("Tatooine")
        expect(person.population).toEqual("200000")
    })
})