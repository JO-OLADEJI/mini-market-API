const Joi = require('joi');


const verifyMarket = (body) => {
  const marketSchema = Joi.object({
    name: Joi.string().min(3).max(256).required(),
    description: Joi.string().min(3).required(),
    foodCategory: Joi.string().required(),
    images: Joi.array().required(),
    geolocation: Joi.object().required()
  });

  return marketSchema.validate(body);
}


module.exports = { verifyMarket }