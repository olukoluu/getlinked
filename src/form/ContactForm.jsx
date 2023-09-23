import useValidation from "../FormValidation/useValidation";
import Button from "../UI/Button";
import Input from "../UI/Input";

const INPUT = [
  {
    id: "first_name",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: "topic",
    type: "text",
    placeholder: "Topic",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Mail",
  },
];

const ContactForm = () => {
  const [values, handleBlur, handleChange, handleSubmit, touched, errors] =
    useValidation();

  return (
    <div className=" z-20 md:w-2/4 md:bg-[#120a29] flex flex-col p-8 md:p-20">
      <h3 className=" text-[#D434FE] font-semibold text-2xl">
        Questions or need assistance?
      </h3>
      <h3 className=" text-[#D434FE] font-semibold text-xl">
        Let us know about it!
      </h3>
      <p className=" my-4 md:hidden text-xs">
        Email us below to any question related to our event
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mt-5"
      >
        
        {INPUT.map(({ id, type, placeholder }) => (
          <Input
            key={id}
            type={type}
            name={id}
            placeholder={placeholder}
            style={" w-full"}
            value={values[id]}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched[id]}
            error={errors[id]}
          />
        ))}

        <div className=" w-full">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={` bg-transparent border rounded p-2 pl-5 outline-none w-full placeholder:text-xs placeholder:text-slate-400 resize-none h-36 md:h-24`}
          ></textarea>
          {touched.message && errors.message && (
            <p className=" text-red-500">{errors.message}</p>
          )}
        </div>
        <Button type="Submit" text={"Submit"} style={"w-fit mx-auto"} />
      </form>
    </div>
  );
};

export default ContactForm;
