const loginUser = (username) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === 'Pranav') {
        const user = {
          name: 'Pranav',
          age: 22,
        };
        res(user);
      } else {
        rej(new Error('Invalid username'));
      }
    }, 1000);
  }); 
};

const getProfile = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const profile = { name: user.name, age: user.age, bio: 'Bitchass' };
      res(profile);
    }, 1000);
  });
};

const getPosts = (profile) => {
  return new Promise((res, rej) => {
    if (profile.age === 22) {
      res(profile);
    }
  });
};

async function operation() {
  const user = await loginUser('Pranav');
  const profile = await getProfile(user);
  const posts = await getPosts(profile);

  console.log(posts);
}

operation();
