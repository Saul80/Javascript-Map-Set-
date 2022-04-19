const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Catarina', 'ADMIN');
userRoles.set('Saulo', 'ADMIN');
userRoles.set('Clarah', 'USER');
userRoles.set('Larah', 'USER');

console.log(getAdmins(userRoles));
