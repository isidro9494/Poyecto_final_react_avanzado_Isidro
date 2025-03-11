export const getDonut = async () => {
    const res = await fetch('http://localhost:3000/lista')
    const result = await res.json()

    return result.donuts
}