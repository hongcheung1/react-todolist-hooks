import { useLocation, useSearchParams } from "react-router-dom";
import Form from "./Form";

export default function FormWrapper(props) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { pathname } = useLocation();
  const mode = pathname.replace("/", "");
  const text = mode === "create" ? "Create" : "Update";
  const title = `${text} ${type}`;

  return (
    <div>
      <h3>{title}</h3>
      <Form type={type} text={text} />
    </div>
  );
}
