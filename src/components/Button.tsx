type ButtonProps = {
  label: string;
  icon?: string;
};

const Button = ({ label, icon }: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    bg-coral-red text-white border-coral-red rounded-full"
    >
      {label}
      <img
        src={icon}
        alt={`${label} button icon`}
        className="ml-2 rounded-full bg-white w-5 h-5"
      />
    </button>
  );
};

export default Button;
