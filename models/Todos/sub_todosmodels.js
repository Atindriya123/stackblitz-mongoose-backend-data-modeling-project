import moongose from "moongose";

const subTodoSchema = new moongose.schema({},{timestamps: true});


export const subTodoSchema = moongose.model("subTodo", subTodoSchema);
