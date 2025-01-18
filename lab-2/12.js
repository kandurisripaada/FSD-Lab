function createProfile({ name, email }) {
    return { name, email };
  }
  
  const profile = createProfile({
    name: 'Alice',
    age: 25,
    email: 'alice@example.com',
    address: '123 Main St'
  });
  
  console.log(profile); 
  