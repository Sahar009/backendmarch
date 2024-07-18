const nodemailer = require('nodemailer')

const sendMail = async = ({user,subject,body}) =>{
const Transporter =nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        tls:{
            rejectUnauthorized:false
        }
       

    })
    const options={
        from:'saheed',
        to:user,
        reply_to:"your mail",
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

