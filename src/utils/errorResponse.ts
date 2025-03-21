import { Response } from "express";

export const errorResponse = (error: unknown, res: Response) => {
    if(error instanceof Error){
        const message = error.message
        switch(message){
            case "not found":
                return res.status(404).json({ "error": message });
            case "reference not found":
            case "missing parameters":
                return res.status(400).json({ "error": message });
        }
    }

    console.log(error)
    return res.status(500).json({ "error": "server error" });
}