import { ReactComponent as Loading } from "../assets/loading.svg";
import "./Button.css";

const Button = ({ className, text, loading = false, ...rest }) => (
  <button className={className} type="button" {...rest}>
    {!loading && text}
    {loading && <Loading />}
  </button>
);

export default Button;
