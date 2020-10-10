
interface UserSignUp{
    user: string;
    password: string;
    email: string;
}

interface UserSignIn{
    email: string;
    password: string;
}

export {
    UserSignUp,
    UserSignIn
}