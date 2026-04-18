import express from "express";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const app = express();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prismaClient = new PrismaClient({ adapter });

app.use(express.json());

app.get("/", (req, res) => {
    const users = prismaClient.user.findMany();
    res.json({
        users
    })
});

app.post("/", async (req, res) => {
    try {
        const user = await prismaClient.user.create({
            data: {
                name: "hardik",
                email: `hardik.${Math.random()}@yopmail.com`,
                password: Math.random().toString()
            }
        });

        res.json({
            message: "User created successfully",
            user
        });
    } catch (e) {
        res.status(500).json({
            message: "Error creating user",
            error: e
        });
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
