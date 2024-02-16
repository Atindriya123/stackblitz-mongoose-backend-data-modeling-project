

import moongose from "moongose"

const userSchema = new moongose.schema({
      username: {
         type: "string",
         required: true,
         unique: true,
         lowercase: true,
      },
      email: {
          type: "string",
          requrired: true,
          unique: true,
          lowercase: true
       },
       password: {

       }
},{timestamps: true}
) 

export const User = mongoose.model('User', userSchema)