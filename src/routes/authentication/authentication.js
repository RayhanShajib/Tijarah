import SignIn from "../../components/sign-in-form/sign-in";
import SignUp from "../../components/sign-up-form/sign-up";
import "./authentication.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
