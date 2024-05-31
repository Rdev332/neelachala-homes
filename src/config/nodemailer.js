import nodemailer from 'nodemailer'

const email = 'neelachalahomes51@gmail.com';
const pass = 'dole tqyi pdrd mnbf'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
})

export const mailOptions = {
    from: email,
    to: 'enquiries@neelachalahomes.com'
}
