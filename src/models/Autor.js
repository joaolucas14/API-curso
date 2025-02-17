import mogoose from "mongoose";

const autorSchema = new mogoose.Schema(
  {
    id: { type: mogoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const autor = mogoose.model("autores", autorSchema);
export { autor, autorSchema };
