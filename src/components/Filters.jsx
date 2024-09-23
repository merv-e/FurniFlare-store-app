import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Filters = () => {
  const { meta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />

      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />

      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />

      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />

      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm capitalize ">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
