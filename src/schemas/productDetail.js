import joi from "joi";

export const productDetailSchema = joi.object({
    product_id: joi.string().required(),
    size: joi.string().required(),
    color: joi.string().required(),
    quantity: joi.number().required(),
});