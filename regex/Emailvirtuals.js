function Emailvirtuals(email) {
 const Emailregex = /^[a-z0-9][\w\.]{m,n}\@\w+?(\.\w+){1,}$/gi
 Emailregex.test() //  Email Address right kina ta justifay korrar jonno
}
module.exports = Emailvirtuals