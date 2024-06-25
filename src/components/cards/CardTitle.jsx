/* eslint-disable react/prop-types */
export const CardTitle = ({ title, subtitle, price }) => {
  return (
    <div className="p-0 py-2">
      <Title title={title} />
      <SubTitle subtitle={subtitle} />
      <Price price={price} />
    </div>
  );
};

const Title = ({ title }) => {
  return (
    <a href="#">
      <h5 className="mb-0 text-sm font-bold tracking-tight text-gray-900 leading-normal">
        {title}
      </h5>
    </a>
  );
};

const SubTitle = ({ subtitle }) => {
  return (
    <>
      <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
        {subtitle}
      </p>
    </>
  );
};

const Price = ({ price }) => {
  return <p className="text-md text-sm font-semibold">{price}</p>;
};
