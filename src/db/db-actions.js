"use server"
import {supabase, superSupabase} from "@/db/supabase"


// === OPERATIONS === //
// Read operations
export const getDbDataList = async (collection, relations) => {

    const {data, error} = await supabase
        .from(`${collection}`)
        .select(buildSelectString(relations))

    if (error) {
        console.error(error)
    }

    if (data && data.length > 0 && data[0].order !== undefined) {
        data.sort((a, b) => a.order - b.order);
    }

    return data
}

export const getDbDataById = async (collection, id, relations) => {

    const {data, error} = await supabase
        .from(`${collection}`)
        .select(buildSelectString(relations))
        .eq('id', id)
        .single()

    if (error) {
        console.error(error)
    }

    return data
}

export const getDbDataEq = async (collection, filter, relations) => {

    const {data, error} = await supabase
        .from(`${collection}`)
        .select(buildSelectString(relations))
        .match(filter)

    if (error) {
        console.error(error)
    }

    if (data && data.length > 0 && data[0].order !== undefined) {
        data.sort((a, b) => a.order - b.order);
    }

    return data
}

// Create Operations
export const createDbData = async (collection, data) => {

    const {error} = await superSupabase
        .from(`${collection}`)
        .insert(data)

    if (error) {
        console.error(error)
    }
}

export const createDbDataAndReturn = async (collection, inputData) => {

    const {data, error} = await superSupabase
        .from(`${collection}`)
        .insert(inputData)
        .select()

    if (error) {
        console.error(error)
    }

    return data
}

// Update Operations
export const updateDbDataById = async (collection, id, data) => {

    const {error} = await superSupabase
        .from(`${collection}`)
        .update(data)
        .eq('id', id)

    if (error) {
        console.error(error)
    }
}

export const updateDbDataEq = async (collection, filter, data) => {

    const {error} = await superSupabase
        .from(`${collection}`)
        .update(data)
        .match(filter)

    if (error) {
        console.error(error)
    }
}

// Delete operations
export const deleteDbDataById = async (collection, id) => {

    const {error} = await superSupabase
        .from(`${collection}`)
        .delete()
        .eq('id', id)

    if (error) {
        console.error(error)
    }
}

export const deleteDbDataEq = async (collection, filter) => {

    const {error} = await superSupabase
        .from(`${collection}`)
        .delete()
        .match(filter)

    if (error) {
        console.error(error)
    }
}

// Collection info operations
export const getColumnInfo = async (collection) => {
    const {data, error} = await superSupabase
        .rpc('get_columns_for_table', { table_name: collection })

    if (error) {
        console.error(error)
    }

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