import {supabase} from '@/utils/supabase'

// === OPERATIONS === //

export const getDbDataList = async (collection, relations) => {
    const {data, error} = await supabase
        .from(`${collection}`)
        .select(buildSelectString(relations))

    if (error) {
        console.error(error)
    }

    console.log(data)

    return data
}

// === OTHER METHODS === //

const buildSelectString = (relations) => {
    if (!relations || relations === true)
        return '*'

    const parts = []

    for (const key in relations) {
        const nested = buildSelectString(relations[key]);
        parts.push(`${key} (${nested})`);
    }

    if (parts.length === 0) return '*';

    return `*, ${parts.join(', ')}`
}