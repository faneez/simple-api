import Post from "../models/Post.js"
import FileService from "./FileService.js"
class PostService {
	async createPost(post, picture) {
		const fileName = FileService.saveFile(picture)
		const createdPost = await Post.create({ ...post, picture: fileName })
		return createdPost
	}

	async getAllPosts() {
		const posts = await Post.find()
		return posts
	}
	async getOnePost(id) {
		const post = await Post.findById(id)
		return post
	}
	async updatePost(post) {
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
			new: true,
		}) // new true для того, чтобы в updatedPost пришла обновленная версия поста
		return updatedPost
	}
	async deletePost(id) {
		const post = await Post.findByIdAndDelete(id)
		return post
	}
}

export default new PostService()
