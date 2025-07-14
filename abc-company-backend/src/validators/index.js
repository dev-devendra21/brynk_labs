function validateRequestBody(schema) {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (error) {
      console.error("Request body is invalid:", error);
      res.status(400).json({
        error: error.message,
        message: "Invalid request body",
        success: false,
      });
    }
  };
}

export { validateRequestBody };
