export const getComments = async () => {
    return [
      {
        id: "1",
        body: "A fantastic Recipe",
        username: "James",
        userId: "1",
        parentId: null,
        createdAt: "2022-12-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Delicious!",
        username: "Sara",
        userId: "2",
        parentId: null,
        createdAt: "2022-12-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "I cannot wait to try it",
        username: "Ben",
        userId: "2",
        parentId: "1",
        createdAt: "2022-12-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Yummy!",
        username: "Takako",
        userId: "2",
        parentId: "2",
        createdAt: "2022-12-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Sara",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };