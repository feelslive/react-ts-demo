import { useNavigate } from "react-router-dom"
import { Button } from 'antd';

interface linkProps {
  path: string,
  name: string,
}
const LinkBtn = ({ path, name }: linkProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(path)} type="link">{name}</Button>
    </>
  )
};

export default LinkBtn;
