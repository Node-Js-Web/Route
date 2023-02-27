
export const validation = (schema) => {
    return async (req, res, next) => {
        try {
            const requestKeys = ["body", "params", "query", "headers", "file", "files"];
            for (const key of requestKeys) {
                if (schema[key]) {
                    const { error } = schema[key].validate(req[key], { abortEarly: false });
                    if (error) {
                        const errors = error.details.map((err) => err);
                        return res.status(400).json({ errors });
                    }
                }
               return next();
            }
        }
        catch (err) {
            console.log(err)
            res.json({ msg: err })
        }
    }
}