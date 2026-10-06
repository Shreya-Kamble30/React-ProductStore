import { useShop } from '../context/ShopContext';

const Toast = () => {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="toast">
      {toast}
    </div>
  );
};

export default Toast;
