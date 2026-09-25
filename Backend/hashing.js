
// npm i bcrypt

import bcrypt from "bcrypt";

let password="abc"


let hashPassword= bcrypt.hash(password,10)
console.log(hashPassword)

// let hashedPassword="$2b$10$7RM2n74X8IOyBBWed3508umlsRsryM9300Kyfuenj3woZ9ZwCj1si"

// let isValidPassword=await bcrypt.compare("ab",hashedPassword)
// console.log(isValidPassword)