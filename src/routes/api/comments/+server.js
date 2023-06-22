import { json } from '@sveltejs/kit'
import { comments } from '$lib/comments'

export function GET () {
    return new json(comments)
}