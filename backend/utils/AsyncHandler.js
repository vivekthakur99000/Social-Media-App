const AsyncHandler = (requesHandler) => {
    (req, res, next) => {
        Promise.resolve(requesHandler(req, res, next))
        .catch((err) => next(err))
    }
}

export {AsyncHandler}