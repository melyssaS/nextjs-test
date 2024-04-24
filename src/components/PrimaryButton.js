const PrimaryButton = ({ name, onClickEvent }) => {
  return (
    <div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm p-2.5 h-10 "
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
