const List = require("../moddel/Schema");
const Emailvirtuals = require('../regex/Emailvirtuals');

function SingUpContollar(req,res) {
   const{Firstname ,lastname ,email ,password ,} = req.body

   if (!Firstname || !lastname) {
    return res.json({
        Message:"Error:Frist name is require"
    })
   }
   if (!email) {
    return res.json({
        Message:"Error:Email is require"
    })
   }
   if (!password) {
    return res.json({
        Message:"Error:password is require"
    })
   }
   if (!Emailvirtuals) {
    return res.json({
        Message:"Error:Emailvirtuals is require"
    })
   }
   const EmailPost = new List({
    Firstname:Firstname,
    lastname: lastname,
    email:email,
    password:password,
   })
    EmailPost.save()
   res.send("give him data")
}
module.exports = SingUpContollar
