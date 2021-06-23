
import axios from 'axios';
import path from 'path';

const baseURL = 'http://www.colourlovers.com/api'

export const getNewestPalettes = async function () {
    const params = { format: 'json' }
    const url = path.join(baseURL, 'palettes', 'new')
    try {
        const { data: newPalettes } = await axios.get(url, { params })
        return { newPalettes, error: null }
    } catch (error) {
        return { newPalettes: null, error }
    }
}