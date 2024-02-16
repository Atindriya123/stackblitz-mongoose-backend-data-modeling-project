
import moongose from "moongose"

const todoSchema = new moongose.schema({
  content:{
    type:String,
    required: true,
    
  },
  complete: {
    type: String,
    default: false
  },
  createdBy: {
    type : moongose.Schema.Types.ObjectId,
    ref : 'User'
  },
  subTodos: [{
     type : moongose.schema.Types.ObjectId,
     ref : "subTodo"
  }
] // Array of subtodos.//
  
}, {timestamps: true})

export const Todo = moongose.model("Todo", userSchema)