import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
// const cors = Cors({
//     methods: ['GET', 'HEAD'],
// })


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    // eslint-disable-next-line @typescript-eslint/ban-types
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Run the middleware
    // await runMiddleware(req, res, cors())

    // Rest of the API logic
    console.log(JSON.stringify(req.body), req.cookies, req.headers)
    res.status(200).json({ name: 'John Doe' })
}