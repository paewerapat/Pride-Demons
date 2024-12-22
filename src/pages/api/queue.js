import protectAPI from "../../../middlewares/protectAPI";
var API_KEY = process.env.API_KEY;


async function getQueued({address}) {
    const queueing = setInterval(async () => {
        const queued = await fetch("http://192.168.145.128:8080/v1/queued", {
            method: 'POST',
            body: address,
            headers: { authorization: API_KEY }
        })
        const queuedData = await queued.json();
        console.log("queuedData ---> ", queuedData)
        if(queuedData.status !== "failed"){
            clearInterval(queueing)
            return res.status(200).json({queuedData})
        } else {
            return res.status(200).json({queuedData})
        }
    }, 10000)
}

async function handler(req, res) {
    try {
        const address = req.body;
        const booked = await fetch("http://192.168.145.128:8080/v1/booked", {
            method: 'POST',
            body: address,
            headers: { authorization: API_KEY }
        })
        const bookedData = await booked.json()
        console.log("bookedData ---> ", bookedData)
        if(bookedData.status !== "failed"){
            const queued = await fetch("http://192.168.145.128:8080/v1/queued", {
                method: 'POST',
                body: address,
                headers: { authorization: API_KEY }
            })
            const queuedData = queued.json()
            console.log("queuedData ---> ", queuedData)
            if(queuedData.status !== "failed"){
                return res.status(200).json({queuedData})
            } else {
                getQueued({address})
            }
        }else{
            console.log("Else failed return;")
            return res.status(200).json({status: 'failed'})
        }
    } catch (err) {
        console.log("error ---> ", err)
        return res.status(500).json({status: "Internal error"})
    }
}

export default protectAPI(handler)