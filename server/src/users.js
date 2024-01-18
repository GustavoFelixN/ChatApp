let users = [];

const checkUserIsRegistered = (name, room) => {
	return !!users.find((user) => user.name === name && user.room === room);
};

const addUser = ({id, name, room}) => {
	const userIsRegistered = checkUserIsRegistered(name, room);
	if (userIsRegistered) {
		return { error: "Usuario ja registrado"};
	}
	const newUser = {id, name, room};
	users.push(newUser);
	return { user: newUser };
};

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
	const removedUser = getUser(id);
	if (removedUser) {
		users = users.filter((user) => user.id !== id);
		return removedUser;
	}
}

const getRoomData = (room) => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getRoomData };
