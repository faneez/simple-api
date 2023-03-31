import PostService from "./services/PostService.js"

class PostController {
	async createPost(req, res) {
		try {
			const post = await PostService.createPost(req.body, req.files.picture)
			res.json(post)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getAllPosts(req, res) {
		try {
			const posts = await PostService.getAllPosts()
			res.json(posts)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async getOnePost(req, res) {
		const { id } = req.params

		if (!id) {
			res.status(400).json({ message: "id не указан" })
		}

		const post = await PostService.getOnePost(id)
		res.json(post)
	}
	async updatePost(req, res) {
		try {
			const post = req.body
			if (!post._id) {
				res.status(400).json({ message: "id не указан" })
			}
			const updatedPost = await PostService.updatePost(post)
			res.json(updatedPost)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async deletePost(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				res.status(400).json({ message: "id не указан" })
			}
			const post = await PostService.deletePost(id)
			res.json("Пост был удален!")
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

export default new PostController()
