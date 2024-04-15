interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const fetchUser = async (userId: number): Promise<User> => {
    const response = await fetch(`https://example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const user: User = await response.json();
    return user;
  };
  
  // Usage in a React component
  const UserComponent: React.FC<{ userId: number }> = ({ userId }) => {
    const [user, setUser] = React.useState<User | null>(null);
  
    React.useEffect(() => {
      fetchUser(userId).then(setUser).catch(console.error);
    }, [userId]);
  
    return (
      <div>
        {user ? (
          <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    );
  };

  //Example making requests with axios and TS

  import axios from 'axios';
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const fetchUser = async (userId: number): Promise<User> => {
    try {
      const response = await axios.get<User>(
        `https://example.com/users/${userId}`,
      );
      return response.data; // Axios automatically parses the JSON response
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  };
  
  // Usage in a React component remains similar to the Fetch API example
  