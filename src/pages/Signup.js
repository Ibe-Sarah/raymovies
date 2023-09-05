import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <div className="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <Header
              heading="Welcome to Raymovies"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/raymovies"
            />
            <Signup/>
        </div>
        </div>
    )
}