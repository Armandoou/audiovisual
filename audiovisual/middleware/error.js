export const errorHandler = (err, req, res, next)=>{
    
const statusCode = res.statusCode ? res.statusCode : 500
res.status(statusCode)

res.json({
    message: err.message,
    stacK: process.env.MODE == 'PRODUCTION' ? null : err.stack
})
}