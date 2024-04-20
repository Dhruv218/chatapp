import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	console.log(req);

	try {
		const loggedInUserId = req.body._id;
 		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
export const getallusers = async (req, res) => {
	try {
		 

		const filteredUsers = await User.find();

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
