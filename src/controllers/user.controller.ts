import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Users", error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching User", error });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error creating User", error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.updateUser(
            parseInt(req.params.id),
            req.body
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating User", error });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.deleteUser(parseInt(req.params.id));
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error deleting User", error });
    }
};
