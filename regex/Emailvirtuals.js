function Emailvirtuals(email) {
 const Emailregex = /^[a-z0-9][\w\.]{m,n}\@\w+?(\.\w+){1,}$/gi
 Emailregex.test()
}
module.exports = Emailvirtuals