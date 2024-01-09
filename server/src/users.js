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

const removeUser = (id) => {
	const removedUser = users.find((user) => user.id === id);
	if (removedUser) {
		users = users.filter((user) => user.id !== id);
		return removedUser;
	}
}

module.exports = { addUser, removeUser };
