const users = [];

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
	return newUser;
};

module.export({addUser});
