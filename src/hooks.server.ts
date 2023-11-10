import type { Handle } from "@sveltejs/kit";

const publicRoutes = ["/login", "/token/verify"]

export const handle:Handle = ({event,resolve}) => {
    const username = event.cookies.get("username")
    if (!username && !publicRoutes.includes(event.url.pathname)) return new Response(null, {
        status: 302,
        headers: {
            Location: "/login"
        }
    })
    event.locals.username = username
    return resolve(event)
}