import { Schema, Document, Mongoose, Model, model } from "mongoose";

export interface IItemModel extends Document {
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    modifiedAt: Date;
}

const schema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre("save", function (next) {
    if (this._doc) {
        let doc = <IItemModel>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

export const Item: Model<IItemModel> = model<IItemModel>("item", schema, "items", true);