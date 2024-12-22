const protectAPI = (handler) => {
    return async (req, res) => {
        try {
            const url = new URL(req.headers.referer)
            console.log("URL ---> ", url)
            if(url.origin === "http://localhost:3000") {
                // call 404 page not found
                return handler(req, res)
            }
            return res.status(403).json({status: "Forbidden"})
        } catch (err) {
            return res.status(403).json({status: "Forbidden"})
        }
    }
}

export default protectAPI;