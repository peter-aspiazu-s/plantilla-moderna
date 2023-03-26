import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';
require('dotenv').config()


type Data = {
    message: {}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    try {
        let nodemailer = require('nodemailer')
        const password = process.env.PASSWORD
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: 'aspiazusa@gmail.com',
                pass: password,
            },
            secure: true,
            tls: {
                rejectUnauthorized: false
            }
        })
        
        const mailData = {
            from: 'paspiazusabando@gmail.com',
            to: 'paspiazusabando@gmail.com',
            subject: `Mensaje de ${req.body.name}`,
            text: `${req.body.message} | enviado desde: ${req.body.email} | número de teléfono: ${req.body.phone}`,
            html: `<div>${req.body.message}</div><p>enviado desde: ${req.body.email}</p><p>Teléfono: ${req.body.phone}</p>`
        }

        console.log(mailData)
    
        await transporter.sendMail(mailData, (err: string, info: {}) => {
            if(err){
                console.log(err)
                res.status(400).json({ message: 'Error intente de nuevo' })
            } else{
                console.log(info)
                res.status(200).json({ message: mailData })
            }
        })
    
    } catch (error) {
        console.log(error)
    }
    
}