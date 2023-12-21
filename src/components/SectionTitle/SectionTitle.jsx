const SectionTitle = ({heading}) => {
  return (
    <div>
      <h1 className="text-center md:text-4xl text-2xl font-poppins font-semibold uppercase pb-5">
          {heading}
        </h1>
    </div>
  );
};

export default SectionTitle;