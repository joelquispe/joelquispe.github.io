import TechnologiesComp from "../../components/technologies.comp";

const TechnologiesPage = () => {
	return <div className="py-5 flex flex-col justify-center">
    <p className="text-3xl md:text-4xl text-center text-text_cyan">Technologies</p>
    <TechnologiesComp />
  </div>;
};

export default TechnologiesPage;
