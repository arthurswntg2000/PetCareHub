module.exports = async (model, req) => {
  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 10);
  const offset = (page - 1) * limit;

  const { rows, count } = await model.findAndCountAll({ limit, offset });

  return {
    total: count,
    page,
    pages: Math.ceil(count / limit),
    data: rows
  };
};
