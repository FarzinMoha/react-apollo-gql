export type headerItem = {
  children: React.ReactNode;
  path?: string;
};

export type reactNode = {
  children: React.ReactNode;
};

export type commentType = {
  id?: string;
  text: string;
  post?: string;
  author?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  posts: postData[]
  comments: commentType[];
};

export type postData = {
  id: string;
  title: string;
  body: string;
  published?: boolean;
  author?: User;
  comments?: commentType[];
};

export type postList = postData[] | undefined

export type spinnerProps = {
  size?:number
  color?:string
}

export type showItemProps = {
  title?:string
  value?:string
}

export type userData = {
  id: string
  name: string
  email: string
  posts: postData[]
  comments: commentType[]
}