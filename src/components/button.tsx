type Button = {
  type?:'submit' | 'button'; 
  title?:  JSX.Element;
  className?: string;
  onClick?: () => void;
};

export const Button = ({type, title, className, onClick }: Button) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  );
};
