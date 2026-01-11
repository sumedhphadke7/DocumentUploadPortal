import { Schema, model, Types } from 'mongoose';

const DocumentSchema = new Schema(
    {
        filename: { type: String, required: true },
        fileType: { type: String, required: true },
        fileSize: { type: Number, required: true },
        storagePath: { type: String, required: true },

        uploadedBy: {
            type: Types.ObjectId,
            ref: 'User',
            required: true,
        },
        checksum: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true,}
);

export const Document = model('Document', DocumentSchema);