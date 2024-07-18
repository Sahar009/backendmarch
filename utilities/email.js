const nodemailer = require('nodemailer')

const sendMail = async = (user,subject,body) =>{
const Transporter =nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
        secure:false,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        tls:{
            rejectUnauthorized:false
        }
       

    })
    const options={
        from:process.env.EMAIL_USER,
        to:user,
        reply_to:process.env.EMAIL_USER,
        subject:subject,
        html:body
    }
    
    Transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err);
        }
        else{
    console.log(info);
        }
    })
}




module.exports= sendMail

