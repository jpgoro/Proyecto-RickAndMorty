const errorMiddleware = (err,_,res,__) => {
    res.status(500).send(err);
}

export default errorMiddleware;