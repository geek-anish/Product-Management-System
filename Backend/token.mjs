/* 

id card 
    generate
        info
        logo
        expiryinfo

    verify
        id card
        logo



 for token 

    generate token
        info
        secretKey 
        expiryInfo

    verify token
        token
        secretkey


*/





import jwt from "jsonwebtoken";

// let info = { name: "ram", address: "ktm" };
// let secretKey = "dw28";
// let expiryInfo = { expiresIn: "365d" }; // it must have have expiresin field

// let token = jwt.sign(info, secretKey, expiryInfo);
// console.log(token);

let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFtIiwiYWRkcmVzcyI6Imt0bSIsImlhdCI6MTc3OTc2MzcyNCwiZXhwIjoxODExMjk5NzI0fQ.yDR21fsRw815cHNpAJ8nxT-CyZsR1W49FWFtVDGUg04";

let info=jwt.verify(token,"dw28")
console.log(info)