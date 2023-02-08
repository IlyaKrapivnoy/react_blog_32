interface Blog {
    id: string;
    title: string;
    author: string;
}

export interface BlogListProps {
    blogs: Blog[];
    title: string;
}
