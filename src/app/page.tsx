import ProductForm from "@/my-components/ProductForm";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-10 max-w-md w-full sm:max-w-xs md:max-w-lg">
        <ProductForm />
      </div>
    </div>
  );
};

export default HomePage;
