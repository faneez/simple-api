import { Router } from "express"
import PostController from "./controllers/PostController.js"

const router = new Router()

router.post("/posts", PostController.createPost)

router.get("/posts", PostController.getAllPosts)

router.get("/posts/:id", PostController.getOnePost)
router.put("/posts", PostController.updatePost)
router.delete("/posts/:id", PostController.deletePost)

export default router
