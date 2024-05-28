import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
    const proxyUrl = useRuntimeConfig().platformProxyUrl
    const path = event.path.replace(/^\/platform\//, '') // /api/users -> users
    const target = joinURL(proxyUrl, path)

    // proxy it!
    return proxyRequest(event, target)
})