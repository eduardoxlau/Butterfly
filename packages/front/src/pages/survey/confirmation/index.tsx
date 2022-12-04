import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Span } from "../../home/styled";
import { Arrow, Card } from "../Question/styled";

export const Confirmation = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <Arrow />
      <Span color="#41E6CD" fontSize="1.5rem" margin="1rem 0">
        THANK YOU!
      </Span>
      <Span color="#000">Your feedback has been sent</Span>
    </Card>
  );
};
