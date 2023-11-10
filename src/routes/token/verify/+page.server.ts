import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async ({cookies, url: {searchParams}}) => {
    const username = searchParams.get("username")

    if (username) {
        cookies.set("username", username, {secure: true, httpOnly: true, path: "/"})
        throw redirect(302, "/profile")
    }
}